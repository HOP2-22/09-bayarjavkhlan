import React from "react";

import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const mainImgMd =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676019522/Blog/ooto_Meetings_1_qhgcz2.png";
const mainImgMobile =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676121801/Blog/Untitled-design23-1280x640_jovzac.png";

const event =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676174497/Blog/event_1_x854ml.png";

const HeroSection1 = ({ title, text, button }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full xl:w-[974px] 2xl:w-[1280px] sm:pr-8 md:pr-0 md:pl-8 lg:pl-20 xl:pl-32 grid grid-cols-1 md:grid-cols-2 pt-[30px] sm:pt-[50px] md:pt-[100px] items-center">
        <div className="w-full flex flex-col items-end md:items-start pr-4">
          <div className="homeTitle text-black pb-[15px] w-2/3 text-end md:text-start">
            {title}
          </div>
          <div className="homeText pb-[30px] text-[#182D40] text-right md:text-start w-5/6 sm:w-3/4 md:w-4/5 lg:w-3/4">
            {text}
          </div>
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
        <div className="relative w-full">
          <img
            src={mainImgMd}
            alt="Meetings"
            draggable="false"
            className="hidden md:block"
          />
          <img src={mainImgMobile} alt="" className="block md:hidden rounded" />
          <div className="hidden md:block absolute -top-3 md:right-[80px] lg:right-[130px] xl:right-[100px] 2xl:right-[160px]">
            <div className="bg-[#FFB200] w-16 h-16 rounded-lg flex justify-center items-center">
              <BellAlertIcon className="absolute z-10 w-8 fill-white" />
            </div>
          </div>
          <img
            src={event}
            alt=""
            className="hidden md:block w-[200px] absolute -left-[80px] md:top-[60px] lg:top-[80px] xl:top-[70px] 2xl:top-[120px]"
          />
          <div className="hidden md:block absolute md:top-[250px] lg:top-[360px] xl:top-[300px] 2xl:top-[450px]">
            <div className="bg-[#FFB200] w-16 h-16 rounded-lg flex justify-center items-center">
              <CalendarDaysIcon className="absolute z-10 w-8 fill-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
