import React from "react";
import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import BgImg from "../../IMG/routerWeb.png";

export const Hero = () => {
  return (
    <div className="bg-gray-200 flex justify-between py-[170px] items-center">
      <div className="pl-40 w-[550px]">
        <div className=" font-bold text-5xl pb-[40px]">
          Your Hub for teamwork
        </div>
        <div className="text-xl pb-[50px]">
          Give everyone you work with—inside and outside your company—a more
          productive way to stay in sync. Respond faster with emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </div>
        <div className="flex">
          <div className="text-cyan-500 text-lg">Learn more</div>
          <ArrowLongRightIcon className="w-4 stroke-cyan-500 pb-5" />
        </div>
      </div>
      <div className="">
        <img src={BgImg} alt="" className="relative" />
        <div className="absolute w-10 h-10 rounded-lg bg-yellow-500">
          <BellAlertIcon className="left-10 absolute z-10 w-5" />
        </div>
        <div className="absolute w-10 h-10 rounded-lg bg-yellow-500">
          <CalendarDaysIcon className="absolute z-10 w-5" />
        </div>
      </div>
    </div>
  );
};
