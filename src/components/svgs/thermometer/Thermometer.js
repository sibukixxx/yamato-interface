import * as React from 'react';

function SvgThermometer(props) {
  return (
    <svg
      width={81.179}
      height={117.78}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          id="thermometer_svg__a"
          x1={17}
          y1={1}
          x2={17}
          y2={101}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.39} stopColor="#FF8585" />
          <stop offset={0.683} stopColor="#E483FF" />
          <stop offset={0.761} stopColor="#838CFF" />
        </linearGradient>
      </defs>
      <path
        d="M2.037 100.39c0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15"
        fill="#868bff"
      />
      <path
        d="M32 1H2v100h30z"
        fill="url(#thermometer_svg__a)"
        transform="translate(-.11 -.11)"
      />
      <path d="M31.89.755h-30v10h30z" fill="#fcfaf2" />
      <path
        stroke="#cfcfcf"
        strokeWidth={3}
        strokeLinecap="round"
        d="M27.39 10.759h9"
      />
      <path
        d="M1.89 1.89v98.508c0 8.556 6.715 15.492 15 15.492 8.284 0 15-6.936 15-15.492V1.89"
        stroke="#cfcfcf"
        strokeWidth={3.78}
        strokeLinecap="round"
      />
      <path
        stroke="#cfcfcf"
        strokeWidth={3}
        strokeLinecap="round"
        d="M27.39 77.39h9"
      />
      <path
        d="M41.318 73.697l1.826 5.157 1.817-5.157h1.923v7.11h-1.47v-1.943l.147-3.355-1.919 5.298h-1.006l-1.914-5.293.147 3.35v1.943h-1.465v-7.11zm11.577 4.742c-.056.765-.339 1.367-.85 1.806-.508.44-1.178.66-2.011.66-.912 0-1.63-.306-2.154-.918-.52-.616-.781-1.459-.781-2.53v-.434c0-.684.12-1.286.361-1.807.241-.52.585-.92 1.03-1.196.45-.28.97-.42 1.563-.42.82 0 1.481.22 1.982.659.502.44.791 1.056.87 1.85H51.44c-.036-.458-.165-.79-.386-.996-.218-.208-.552-.312-1-.312-.49 0-.855.176-1.1.527-.24.349-.364.89-.37 1.626v.537c0 .769.115 1.33.346 1.685.234.355.602.532 1.104.532.452 0 .789-.102 1.01-.307.225-.21.353-.53.386-.962zm2.744-.235h-1.167v2.603h-1.465v-7.11h2.641c.84 0 1.488.188 1.944.562.455.374.683.903.683 1.587 0 .485-.105.89-.317 1.216-.208.322-.526.58-.952.771l1.538 2.906v.068h-1.572zm-1.167-1.186h1.181c.368 0 .653-.093.855-.279.202-.188.302-.447.302-.776 0-.335-.096-.599-.288-.791-.188-.192-.48-.288-.874-.288h-1.176zm8.988 3.789H62.05v-5.44l-1.685.523v-1.148l2.945-1.054h.151zm4.892 0h-1.41v-5.44l-1.685.523v-1.148l2.944-1.054h.151zm6.25-2.94c0 .984-.204 1.736-.61 2.256-.407.52-1.003.782-1.788.782-.774 0-1.367-.256-1.777-.767-.41-.511-.62-1.243-.63-2.197v-1.309c0-.993.205-1.746.615-2.26.414-.515 1.008-.772 1.783-.772.774 0 1.367.255 1.777.766.41.508.62 1.239.63 2.193zm-1.411-1.435c0-.59-.082-1.018-.244-1.284-.16-.27-.41-.406-.752-.406-.332 0-.578.129-.738.386-.156.254-.239.653-.249 1.196v1.729c0 .58.078 1.01.235 1.294.16.28.413.42.761.42.345 0 .594-.135.747-.405.153-.27.233-.684.24-1.24zm1.498-1.367c0-.437.142-.79.425-1.06.283-.273.654-.41 1.113-.41.466 0 .84.135 1.123.405.284.267.425.63.425 1.089v.352c0 .439-.141.792-.425 1.06-.283.266-.654.4-1.113.4-.462 0-.836-.134-1.123-.4-.283-.271-.425-.634-.425-1.09zm.938.376c0 .195.055.353.166.473a.592.592 0 00.444.176c.183 0 .327-.06.435-.18.107-.121.161-.282.161-.484v-.361a.684.684 0 00-.161-.474.565.565 0 00-.445-.18.563.563 0 00-.434.18c-.11.117-.166.282-.166.493zm2.46 3.623c0-.44.144-.793.43-1.06.287-.27.658-.405 1.114-.405.462 0 .835.133 1.118.4.286.264.43.628.43 1.094v.352c0 .436-.14.789-.42 1.059-.28.267-.653.4-1.118.4-.47 0-.845-.134-1.128-.405-.284-.27-.425-.628-.425-1.074zm.938.38c0 .18.059.333.176.46.117.127.264.19.44.19.397 0 .595-.22.595-.66v-.37a.656.656 0 00-.166-.47.568.568 0 00-.44-.18.568.568 0 00-.439.18c-.11.118-.166.279-.166.484zm-2.51.83l-.688-.37 3.472-5.557.688.37z"
        fill="#818181"
      />
    </svg>
  );
}

export default SvgThermometer;
