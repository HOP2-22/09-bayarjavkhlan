import React from "react";

import { line2, line3 } from "../layoutdata";

const FooterLine2 = () => {
  return (
    <div className="w-full flex md:justify-between items-start">
      <div className="w-1/2 flex flex-col">
        <div className="text-[14px] h-[66px] pt-4 text-white flex items-start">
          {line2.title}
        </div>
        <div className="flex flex-col gap-[8px]">
          {line2.line.map((item, index) => {
            return (
              <p
                key={index}
                className="text-white text-[14px] hover:text-gray-200 transition-colors cursor-pointer"
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-[14px] h-[66px] pt-4 text-white flex items-start">
          {line3.title}
        </div>
        <div className="flex flex-col gap-[8px]">
          {line3.line.map((item, index) => {
            return (
              <p
                key={index}
                className="text-white text-[14px]  hover:text-gray-200 transition-colors cursor-pointer"
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterLine2;
