

import React from "react";

const IconCard = () => {
  return (
    <div className="mt-16 flex justify-center items-center gap-14 w-[1160px] mx-auto">
      <div className="flex flex-col items-center cursor-pointer group">
        <div className="w-[128px] h-[128px] bg-[#F4F4F4] rounded-md shadow-md flex items-center justify-center hover:bg-[#F4F4F4] transition-colors duration-300 relative -top-8">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="62.000000pt"
            height="61.000000pt"
            viewBox="0 0 62.000000 61.000000"
            preserveAspectRatio="xMidYMid meet"
            className="w-[61px] h-[61px] text-black group-hover:text-[#3019B2] fill-current transition-colors duration-300"
          >
            <g
              transform="translate(0.000000,61.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path d="M51 546 c-8 -9 -11 -70 -9 -197 l3 -184 98 -3 97 -3 0 -34 c0 -30 -3
              -35 -24 -35 -27 0 -40 -22 -23 -39 6 -6 31 -11 54 -11 40 0 43 2 33 19 -5 11
              -10 45 -10 75 l0 56 -100 0 -100 0 2 168 3 167 240 0 240 0 0 -35 c0 -33 9
              -49 28 -50 12 0 8 95 -5 108 -19 19 -511 17 -527 -2z"/>
              <path d="M326 394 c-13 -13 -16 -43 -16 -168 0 -177 4 -186 81 -186 l45 0 -4
              35 c-4 33 -6 35 -43 35 l-40 0 3 133 3 132 100 0 100 0 0 -42 c0 -32 4 -43 18
              -47 15 -3 17 3 17 48 0 29 -5 57 -12 64 -19 19 -232 16 -252 -4z"/>
              <path d="M458 251 c-1 -6 -1 -55 2 -108 l5 -98 39 -3 c22 -2 50 -1 63 3 23 5
              24 7 21 108 l-3 102 -62 3 c-35 2 -62 -1 -65 -7z m102 -96 l0 -75 -40 0 -40 0
              0 75 0 75 40 0 40 0 0 -75z m-30 -95 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3
              6 -1 10 4 10 6 0 11 -4 11 -10z"/>
            </g>
          </svg>
        </div>
        <span className="mt-4 text-sm font-semibold text-[#000000] group-hover:text-[#3019B2]  relative -top-8">
          Tecnologia
        </span>
      </div>
    </div>
  );
};

export default IconCard;