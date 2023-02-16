import React from "react";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const mainImg =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676019624/Blog/brooke-cagle-JBwcenOuRCg-unsplash_1_1_1_qg3j4h.png";
const secondaryImg =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676104373/Blog/Group_18_suai9y.png";

const HeroSection3 = ({ title, text, button }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="sm:pr-8 md:pr-0 md:pl-8 lg:pl-20 xl:pl-32 w-full xl:w-[974px] 2xl:w-[1280px] grid grid-cols-1 md:grid-cols-2 pt-[60px] md:pt-[100px] items-center">
        <div className="w-full flex flex-col items-end md:items-start pr-4">
          <div className="homeTitle text-black xs:w-2/3 sm:w-1/2 md:w-2/3 xl:w-0.8 text-end md:text-start pb-4 md:pb-[10px]">
            {title}
          </div>
          <div className="homeText pb-[20px] text-[#182D40] text-right md:text-start w-5/6 sm:w-3/4 md:w-4/5 lg:w-3/4">
            {text}
          </div>
          <Link
            to={"/products"}
            className="w-[120px] flex group cursor-pointer"
          >
            <div className=" text-[#4DA0FD]  text-[16px] font-semibold cursor-pointer group-hover:text-cyan-600">
              {button}
            </div>
            <ArrowLongRightIcon className="homeButton" />
          </Link>
        </div>
        <div className="relative w-full">
          <img
            src={mainImg}
            alt="Meetings"
            draggable="false"
            className="w-full h-64 sm:h-80 md:h-auto object-cover"
          />
          <img
            src={secondaryImg}
            draggable="false"
            alt=""
            className="absolute left-10 top-6 xs:left-16 xs:top-10 md:left-4 lg:top-14 lg:left-6 2xl:top-[72px] 2xl:left-8 w-[25%] sm:w-0.2 md:w-0.4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
