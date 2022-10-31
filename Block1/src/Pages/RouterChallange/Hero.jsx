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
import Card from "../../Components/Card/Card";

const Hero = () => {
  return (
    <>
      <div className="bg-gray-200 flex justify-between py-[170px] items-center">
        <div className="pl-40 w-[550px]">
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
            <div className="text-cyan-500 text-lg">Learn more</div>
            <ArrowLongRightIcon className="w-4 stroke-cyan-500 pb-5" />
          </div>
        </div>
        <div className="relative">
          <img src={Meeting} alt="" className="" />
          <div className="absolute -top-3 left-96">
            <div className="flex justify-center items-center w-16 h-16 rounded-lg bg-yellow-500">
              <BellAlertIcon className="absolute z-10 w-8 fill-white" />
            </div>
          </div>
          <div className="absolute bottom-60">
            <div className="flex justify-center items-center w-16 h-16 rounded-lg bg-yellow-500">
              <CalendarDaysIcon className="absolute z-10 w-8 fill-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-row-reverse gap-[200px] justify-end py-[170px] items-center">
        <div className="w-[550px]">
          <div className=" font-bold text-5xl pb-[40px]">
            Simple task management
          </div>
          <div className="text-xl pb-[50px]">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="flex">
            <div className="text-cyan-500 text-lg">Learn more</div>
            <ArrowLongRightIcon className="w-4 stroke-cyan-500 pb-5" />
          </div>
        </div>
        <div className="relative">
          <img src={BgImg1} alt="" className="" width={800} />
          <img src={Event1} alt="" className="absolute top-14 right-4" />
          <img src={Event2} alt="" className="absolute right-0 top-48" />
        </div>
      </div>
      <div className="bg-gray-200 flex justify-between py-[170px] items-center">
        <div className="pl-40 w-[550px]">
          <div className=" font-bold text-5xl pb-[40px]">
            Scheduling that actually works
          </div>
          <div className="text-xl pb-[50px]">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="flex">
            <div className="text-cyan-500 text-lg">Learn more</div>
            <ArrowLongRightIcon className="w-4 stroke-cyan-500 pb-5" />
          </div>
        </div>
        <div className="pr-28 relative">
          <img src={BgImg2} alt="" className="  " />
          <img src={Calendar} alt="" className="absolute top-20 left-10" />
        </div>
      </div>
      <div className="text-center bg-gray-200 text-5xl font-bold py-14">
        What people say about us
      </div>
      <Card />
    </>
  );
};

export default Hero;
