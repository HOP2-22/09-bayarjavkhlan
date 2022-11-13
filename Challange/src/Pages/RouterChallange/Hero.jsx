import React from "react";
import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import Meeting from "../../IMG/routerWeb.png";
import BgImg1 from "../../IMG/routerWomen1.png";
import BgImg2 from "../../IMG/routerWomen2.png";
import Calendar from "../../IMG/Calendar.png";
import Event1 from "../../IMG/event2.png";
import Event2 from "../../IMG/event3.png";
import CardIndex from "../../Components/Card/CardIndex";

const Hero = () => {
  return (
    <>
      <div className="bg-gray-200 py-[170px] flex justify-between items-center">
        <div className="w-[550px] pl-40">
          <div className=" font-bold text-5xl pb-[40px]">
            Your Hub for teamwork
          </div>
          <div className="text-xl pb-[50px]">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="flex">
            <div className="text-light-blue-500 text-lg cursor-pointer hover:text-cyan-600">
              Learn more
            </div>
            <ArrowLongRightIcon className="w-4 pb-5 stroke-light-blue-500" />
          </div>
        </div>
        <div className="relative">
          <img src={Meeting} alt="" className="" />
          <div className="absolute -top-3 left-96">
            <div className="bg-yellow-700 w-16 h-16 rounded-lg flex justify-center items-center">
              <BellAlertIcon className="absolute z-10 w-8 fill-white" />
            </div>
          </div>
          <div className="absolute bottom-60">
            <div className="bg-yellow-700 w-16 h-16 rounded-lg flex justify-center items-center">
              <CalendarDaysIcon className="absolute z-10 w-8 fill-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-[170px] flex flex-row-reverse gap-[200px] justify-end items-center">
        <div className="w-[550px]">
          <div className="pb-[40px] font-bold text-5xl">
            Simple task management
          </div>
          <div className="pb-[50px] text-xl">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="flex">
            <div className="text-light-blue-500 text-lg cursor-pointer hover:text-cyan-600">
              Learn more
            </div>
            <ArrowLongRightIcon className="w-4 pb-5 stroke-light-blue-500" />
          </div>
        </div>
        <div className="relative">
          <img src={BgImg1} alt="" className="" width={800} />
          <img src={Event1} alt="" className="absolute top-14 right-4" />
          <img src={Event2} alt="" className="absolute right-0 top-48" />
        </div>
      </div>
      <div className="bg-gray-200 py-[170px] flex justify-between items-center">
        <div className="pl-40 w-[550px]">
          <div className="pb-[40px] text-5xl font-bold">
            Scheduling that actually works
          </div>
          <div className="pb-[50px] text-xl">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="flex">
            <div className="text-light-blue-500 text-lg cursor-pointer hover:text-cyan-600">
              Learn more
            </div>
            <ArrowLongRightIcon className="pb-5 w-4 stroke-light-blue-500" />
          </div>
        </div>
        <div className="relative pr-28">
          <img src={BgImg2} alt="" className="  " />
          <img src={Calendar} alt="" className="absolute top-20 left-10" />
        </div>
      </div>
      <div className="bg-gray-200 py-14 text-center text-5xl font-bold">
        What people say about us
      </div>
      <CardIndex />
    </>
  );
};

export default Hero;
