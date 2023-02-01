import React from "react";

const profileImg: string =
  "https://www.craftz.dog/_next/image?url=%2Fimages%2Ftakuya.jpg&w=256&q=75";

const AboutMe = ({ theme }: any) => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[570px] flex flex-col gap-10">
      <div
        className={`w-full rounded flex overflow-hidden justify-center items-center ${
          !theme ? "bg-[#f6f0e8] " : "bg-[#313134] "
        } `}
      >
        <p className=" py-[10px]">
          Hello, I'm an indie app developer based in Japan!
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between ">
        <div className="flex flex-col">
          <div className="text-[30px] font-bold">Takuya Matsuyama</div>
          <div className="">
            Digital Craftsman ( Artist / Developer / Designer )
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img
            src={profileImg}
            alt=""
            className="w-[100px] h-[100px] rounded-full border border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
