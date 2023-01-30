import React from "react";

const AboutMe = ({ theme, setTheme }: any) => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[680px] lg:w-[840px] flex flex-col gap-10">
      <div
        className={`w-full rounded flex overflow-hidden justify-center items-center ${
          !theme ? "bg-[#f6f0e8] " : "bg-[#313134] "
        } `}
      >
        <p className=" py-[10px]">
          Hello, I'm an indie app developer based in Japan!
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-[30px] font-bold">Takuya Matsuyama</div>
          <div className="">
            Digital Craftsman ( Artist / Developer / Designer )
          </div>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
