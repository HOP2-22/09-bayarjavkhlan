import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

const Web = ({ theme }: any) => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[570px] flex flex-col pt-4 pb-6 gap-4">
      <div
        className={`${
          theme
            ? "text-[#EDEDED] decoration-[#535353] "
            : "text-black decoration-[#525252]"
        } flex items-center text-[20px] font-medium decoration-[3px] underline underline-offset-4`}
      >
        On the Web
      </div>
      <div
        className={`${
          theme ? "text-[#81E6D9]" : "text-[#319795]"
        } flex flex-col justify-start`}
      >
        <div className="w-36 px-4 flex items-center gap-2 h-10 cursor-pointer rounded hover:bg-[#319795]/60 group transition duration-300">
          <AiFillGithub className="text-[18px]" />{" "}
          <p className="font-medium group-hover:underline decoration-[#E159AC]">
            @craftzdog
          </p>
        </div>
        <div className="w-60 px-4 flex items-center gap-2 h-10 cursor-pointer rounded hover:bg-[#319795]/60 group transition duration-300">
          <BsTwitter className="text-[18px]" />{" "}
          <p className="font-medium group-hover:underline decoration-[#E159AC]">
            @inkdrop_app (English)
          </p>
        </div>
        <div className="w-[216px] px-4 flex items-center gap-2 h-10 cursor-pointer rounded hover:bg-[#319795]/60 group transition duration-300">
          <BsTwitter className="text-[18px]" />{" "}
          <p className="font-medium group-hover:underline decoration-[#E159AC]">
            @craftzdog (hahaha)
          </p>
        </div>
        <div className="w-36 px-4 flex items-center gap-2 h-10 cursor-pointer rounded hover:bg-[#319795]/60 group transition duration-300">
          <AiFillInstagram className="text-[18px]" />{" "}
          <p className="font-medium group-hover:underline decoration-[#E159AC]">
            @craftzdog
          </p>
        </div>
      </div>
      <div className="w-full flex gap-5">
        <div className="w-1/2 flex flex-col gap-3">
          <iframe
            src={`https://www.youtube.com/watch?v=c2Ee5xE_o1M&ab_channel=Kairos`}
            className="w-full rounded-xl"
          />
          <p className="text-center">
            Dev as Life <br /> My Youtube channel (100k subs)
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <iframe
            src={`https://www.inkdrop.app/`}
            className="w-full rounded-xl"
          />
          <p className="text-center">
            Inkdrop <br /> a Markdown note-takin app
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center py-4">
        <div
          className={`${
            theme
              ? "bg-[#81E6D9] text-black/80 hover:bg-teal-500"
              : "bg-[#319795] text-white/90 hover:bg-teal-700"
          } px-4 py-2 flex items-center cursor-pointer rounded font-medium`}
        >
          Popular posts{" "}
          <span>
            <BsChevronRight className="w-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Web;
