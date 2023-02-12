import React from "react";

const LeftSide = () => {
  return (
    <div className="pl-5 md:pl-8 lg:pl-20 xl:pl-32 4xl:pl-48 5xl:pl-72 7xl:pl-88 pt-[60px] md:col-span-3 w-full">
      <div className="px-8 pt-10 flex flex-col w-full md:w-11/12 lg:w-4/5 xl:w-3/4 2xl:w-2/3 4xl:w-3/5 6xl:w-[55%]">
        <p className="text-[30px] lg:text-[36px] font-medium lg:font-semibold pb-[10px]">
          Contact Us
        </p>
        <p className="text-main-text text-[13px] lg:text-[14px] pb-[30px] lg:pb-12">
          We’re here to help! Send us your query via the form below or send us
          an email at
          <span className="px-1 text-[#5FC3CA] transition">
            jawkhlan626@gmail.com
          </span>
          for any issue you’re facing
        </p>
        <div className="w-full flex flex-col pb-14 lg:pb-16">
          <p className="text-[#5FC3CA] pb-2">Name</p>
          <div className="flex flex-col gap-8 lg:gap-10">
            <input
              type="text"
              placeholder="Write your Name"
              className="w-full text-[#5FC3CA] placeholder:text-[#C0C0C0] pl-[15px] py-3 rounded-[5px] bg-zinc-200 border-b-2 border-gray-500 focus:outline-none focus:border-[#5FC3CA]"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="w-full text-[#5FC3CA] placeholder:text-[#C0C0C0] pl-[15px] py-3 rounded-[5px] bg-zinc-200 border-b-2 border-gray-500 focus:outline-none focus:border-[#5FC3CA]"
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Type your message here"
              className="w-full text-[#5FC3CA] placeholder:text-[#C0C0C0] px-[15px] py-3 rounded-[5px] bg-zinc-200 border-b-2 border-gray-500 focus:outline-none focus:border-[#5FC3CA]"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="px-8 md:px-0 w-full flex justify-center">
        <button className="w-full md:w-auto md:px-8 lg:px-14 py-[10px] mb-24 flex justify-center rounded-[5px] bg-[#5FC3CA] hover:bg-[#3cadb5] transition text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
