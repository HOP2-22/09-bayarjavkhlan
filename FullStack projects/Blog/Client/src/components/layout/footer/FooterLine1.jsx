import React from "react";

import { line1, social } from "../layoutdata";

const FooterLine1 = () => {
  return (
    <div className="w-full flex sm:justify-between items-start">
      <div className="w-1/2">
        <div className="text-[36px] h-16 text-white font-bold flex items-start sm:text-4xl leading-1">
          team
          <span className="bg-sky-bg w-[8px] h-[8px] mt-4 sm:mt-[26px]"></span>
        </div>
        <div className="flex flex-col gap-[6px]">
          {social.map((item, index) => {
            return (
              <div
                key={index}
                className="text-white hover:text-gray-200 transition-colors cursor-pointer flex items-center gap-2"
              >
                <div className="">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-[14px] h-[66px] pt-4 text-white flex items-start">
          {line1.title}
        </div>
        <div className="flex flex-col gap-[8px]">
          {line1.line.map((item, index) => {
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
    </div>
  );
};

export default FooterLine1;
