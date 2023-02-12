import React from "react";

const Header = () => {
  return (
    <div className="relative w-full max-h-screen flex flex-col md:block justify-center items-center bg-gray-300 md:bg-transparent">
      <div className="hidden md:block absolute -z-10 top-0 left-0 w-full h-full">
        <img
          src={
            "https://res.cloudinary.com/dalheltnm/image/upload/v1676019492/Blog/brooke-cagle-cb4Dv50LN1Y-unsplash_1_ssh1ve.jpg"
          }
          alt=""
          className={`w-full object-contain`}
        />
      </div>
      <img
        src={
          "https://res.cloudinary.com/dalheltnm/image/upload/v1676019492/Blog/brooke-cagle-cb4Dv50LN1Y-unsplash_1_ssh1ve.jpg"
        }
        alt=""
        className="w-full max-h-screen block md:hidden object-contain"
      />
      <div className="w-full flex flex-col p-5 md:px-8 lg:px-20 xl:px-32 py-16 md:pt-[120px] lg:pt-[180px] xl:pt-[230px] 2xl:pt-[260px] 3xl:pt-[350px]">
        <div className="11/12 xs:w-5/6 sm:w-4/5 md:w-0.6 2xl:w-0.4 3xl:w-0.3">
          <p className=" md:text-white homeTitle pb-[10px] lg:pb-[18px] xl:pb-[22px]">
            Instant collaborations for remote teams
          </p>
          <p className="w-2/3 text-[#182D40] md:text-white homeText pb-7">
            All in one for your remote team chats, collaboration and track
            projects
          </p>
          <div className="w-full flex justify-between gap-[30px]">
            <input
              type="text"
              className="rounded-[5px] grow focus:outline-none py-[14px] pl-4 placeholder:text-secondary-text text-[16px]"
              placeholder="Email"
            />
            <button className="p-2 xs:py-3 xs:px-4 xl:py-4 xl:px-5 bg-sky-bg hover:bg-sky-500 transition-colors duration-200 rounded-[5px] text-white text-[14px] font-light">
              Get early access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
