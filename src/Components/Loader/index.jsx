import React from "react";

const Index = ({ show }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-[50] bg-[#0a192f] transition-all ease-in-out duration-500 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25vh"
        height="25vh"
        viewBox="0 0 512 512"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <defs>
          <style>{".prefix__fil0{fill:#ffa358;fill-rule:nonzero}"}</style>
        </defs>
        <g id="prefix__Layer_x0020_1">
          <path
            className="prefix__fil0 loader-elm-0"
            d="M149 385h-4c-14-3-25-7-32-12-8-5-13-11-16-18s-5-15-5-24l1-29c0-8-1-14-3-18-2-5-5-8-9-10s-8-4-13-4h-2c-3 0-6-1-9-4-2-2-4-5-4-9s2-7 4-9c3-3 6-4 9-4h2c5 0 9-2 13-4s7-5 9-10 3-10 3-17l-1-30c0-6 1-12 3-18 1-6 4-11 8-16 4-4 9-8 16-12 7-3 15-6 26-8 5-1 9 0 12 3 2 2 4 6 4 10 0 2-1 4-3 6s-4 4-7 5c-8 3-13 5-17 9-4 3-7 6-8 11-1 4-2 9-2 15l1 30c0 11-3 20-8 26-6 6-13 11-23 14v-2c10 4 17 8 23 14 5 6 8 15 8 26l-1 30c0 6 1 11 2 15s4 8 8 11 9 6 17 9c6 3 10 7 10 12 0 3-2 6-4 9-2 2-5 3-8 3z"
          />
          <path
            id="prefix__1"
            className="prefix__fil0 loader-elm-1"
            d="M260 173l-62 145c-1 3-3 6-6 8s-6 3-9 3c-5 0-9-1-12-4-2-3-3-6-3-11 0-1 0-3 1-5l71-171c1-3 3-6 7-8 3-3 6-3 10-3 3 0 6 1 9 3s5 5 7 8l70 168c1 2 1 4 1 6 0 6-1 10-5 13-3 3-7 4-11 4-3 0-6-1-9-3s-5-5-6-8l-62-143 9-2zm-53 110l15-33h77l6 33h-98z"
          />
          <path
            id="prefix__2"
            className="prefix__fil0 loader-elm-2"
            d="M363 385c-4 0-7-1-9-5-2-3-3-6-3-8 0-3 1-5 3-7s4-3 7-4c8-3 14-6 17-9 4-3 7-7 8-11 1-5 2-10 2-16l-1-29c0-12 3-20 8-26 6-6 14-11 23-14v1c-9-3-17-8-23-14-5-6-8-15-8-26l1-29c0-6-1-11-2-16-1-4-4-7-8-11-4-3-9-6-17-9-6-2-10-6-10-12 0-3 2-6 4-8 2-3 5-4 8-4h4c14 3 25 7 32 12 8 5 13 11 16 19 3 7 5 15 5 24l-1 29c0 7 1 13 3 18 2 4 6 8 9 10 4 2 9 3 13 3h2c3 0 6 2 9 4 2 3 4 6 4 9 0 4-2 7-4 10-3 2-6 4-9 4h-2c-5 0-9 1-13 3-4 3-7 6-9 10-2 5-3 11-3 18l1 29c0 7-1 13-3 19-1 6-4 11-8 15-4 5-9 9-16 12-7 4-15 6-26 9h-2-2z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Index;
