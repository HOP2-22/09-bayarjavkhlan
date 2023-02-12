import React from "react";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const mainImg =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676122172/Blog/Screenshot_2023-02-11_at_21.29.23_ndglhp.png";
const secondaryImg1 =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676102570/Blog/event_2_azevag.png";
const secondaryImg2 =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676102571/Blog/event_3_qa6mil.png";

const HeroSection2 = ({ title, text, button }) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`w-full xl:w-[974px] 2xl:w-[1280px] pt-[60px] md:pt-[100px] pl-0 sm:pl-8 md:pl-0 grid grid-cols-1 md:grid-cols-2 items-center md:gap-0`}
      >
        <div className="relative w-full flex justify-center md:order-first order-last">
          <img
            src={mainImg}
            alt=""
            draggable="false"
            className="w-full h-64 xs:h-72 sm:h-96 object-cover md:h-auto"
          />
          <div className="absolute w-[140px] sm:w-[200px] md:w-[150px] lg:w-[170px] xl:w-[190px] 2xl:w-[210px] top-4 right-9 xs:top-5 xs:right-10 sm:top-3 sm:right-4 md:top-6 md:right-[35px] lg:top-8 lg:right-14 xl:top-7 xl:right-[45px] 2xl:top-9 2xl:right-[65px] flex flex-col gap-3 items-end">
            <img src={secondaryImg1} alt="" draggable="false" />
            <img src={secondaryImg2} alt="" draggable="false" />
          </div>
        </div>
        <div className="pl-4 md:pl-12 lg:pl-16 flex flex-col gap-[20px] md:gap-[30px]">
          <div className="w-1/2 md:w-2/3 homeTitle">{title}</div>
          <div className="homeText w-5/6 sm:w-3/4 md:w-4/5 lg:w-3/4 text-[#182D40]">
            {text}
          </div>
          <div className="w-[120px]">
            <Link
              to={"/products"}
              className="w-[120px] flex group cursor-pointer"
            >
              <div className="text-[#4DA0FD]  text-[16px] font-semibold cursor-pointer group-hover:text-cyan-600">
                {button}
              </div>
              <ArrowLongRightIcon className="homeButton" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
