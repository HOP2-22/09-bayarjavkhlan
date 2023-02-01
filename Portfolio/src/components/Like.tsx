import React from "react";

const Like = ({ setTheme, theme }: any) => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[570px] flex flex-col pt-4 pb-6 gap-4">
      <div
        className={`${
          theme
            ? "text-[#EDEDED] decoration-[#535353] "
            : "text-black decoration-[#525252]"
        } flex items-center text-[20px] font-medium decoration-[3px] underline underline-offset-4`}
      >
        I ❤
      </div>
      <div className="indent-2 font-light text-[14px]">
        Art,Music,<span className="text-[#E159AC]">Drawing</span>,Playing Drums,
        <span className="text-[#E159AC]">Photography</span>
        ,Leica,Machine Learning
      </div>
    </div>
  );
};

export default Like;
