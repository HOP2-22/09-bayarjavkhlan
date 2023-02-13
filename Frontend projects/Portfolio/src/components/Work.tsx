import React from "react";
import { useNavigate } from "react-router-dom";

import { BsChevronRight } from "react-icons/bs";

const Work = ({ theme }: any) => {
  const navigate = useNavigate();

  return (
    <div>
      <p
        className={`${
          theme
            ? "text-[#EDEDED] decoration-[#535353] "
            : "text-black decoration-[#525252]"
        } text-[20px] font-medium pt-3 pb-4 decoration-[3px] underline underline-offset-4`}
      >
        Work
      </p>
      <p
        className={`${
          theme ? "text-gray-300" : "text-[#1A202C]"
        } w-full indent-4 `}
      >
        Jawkhlan is a freelance and a full-stack developer based in Osaka with a
        passion for building digital services/stuff he wants. He has a knack for
        all things launching products, from planning and designing all the way
        to solving real-life problems with code. When not online, he loves
        hanging out with his camera. Currently, he is living off of his own
        product called
        <span className="font-light text-blue-600 hover:underline cursor-pointer">
          <a href="https://www.craftz.dog/works/inkdrop">Inkdrop</a>
        </span>
        . He publishes content for marketing his products and his YouTube
        channel called "
        <span className="font-light text-blue-600 hover:underline cursor-pointer">
          <a href="https://www.youtube.com/devaslife" target={"_blank"}>
            Dev as Life
          </a>
        </span>
        " has more than 100k subscribers.
      </p>
      <div className="w-full flex justify-center py-4">
        <div
          className={`${
            theme
              ? "bg-[#81E6D9] text-black/80 hover:bg-teal-500"
              : "bg-[#319795] text-white/80 hover:bg-teal-700"
          } px-4 py-2 flex font-medium items-center cursor-pointer rounded`}
          onClick={() => {
            navigate("/works");
          }}
        >
          My portfolio
          <span>
            <BsChevronRight className="w-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Work;