import { useMemo } from 'react';

import { TransactionType } from '../../state/transactions/actions';
import { useTransactionAdder } from '../../state/transactions/hooks';
import { parseEther } from '../../utils/web3';
import { useYamatoMainContract } from '../useContract';
import { useActiveWeb3React } from '../web3';
import {
  CallbackState,
  getErrorMessage,
  estimateGas,
  InvalidCallback,
} from './helper';

export function useCoreRedeemCallback(): {
  // signatureData: SignatureData | undefined | null  FIXME: EIP-2612
  state: CallbackState;
  callback: null | ((expected: number) => Promise<string>);
  error: string | null;
} {
  const { account, chainId, library } = useActiveWeb3React();

  const yamatoMainContract = useYamatoMainContract();
  const addTransaction = useTransactionAdder();

  return useMemo(() => {
    if (!library || !account || !chainId || !yamatoMainContract) {
      return InvalidCallback;
    }

    return {
      state: CallbackState.VALID,
      callback: async function onCoreRedeem(expected: number): Promise<string> {
        // payload
        const value = parseEther('0'); // Set 0 as dummy.
        const option = {
          from: account,
        };

        const signer = yamatoMainContract.connect(library.getSigner());

        // estimate gas
        const call = await estimateGas('coreRedeem', value, option, signer);
        if ('error' in call) {
          throw new Error(call.error);
        }

        try {
          // send tx
          const params = { ...option, gasLimit: call.gasEstimate };
          const response = await signer.redeem(value, true, params);

          // regist pending tx
          addTransaction(response, {
            type: TransactionType.CORE_REDEEM,
            expected,
          });

          return response.hash;
        } catch (error: any) {
          throw new Error(getErrorMessage('coreRedeem', error));
        }
      },
      error: null,
    };
  }, [library, account, chainId, yamatoMainContract, addTransaction]);
}
