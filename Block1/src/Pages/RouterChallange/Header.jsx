import React from "react";
import BgImg from "../../IMG/infoWeb.jpg";
import Hero from "./Hero";
import { useState } from "react";

const Header = () => {
  const [headerValue, setValue] = useState("");
  const GetAccess = () => {
    console.log(headerValue);
  };
  return (
    <>
      <div
        className="bg-cover w-full h-[1080px] bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="h-full flex items-center">
          <div className="w-2/5 pl-40">
            <div className="text-5xl text-white font-bold leading-[60px]">
              Instant collaborations for remote teams
            </div>
            <div className="text-white w-2/3 text-xl pt-[22px] leading-[30px] font-mulish">
              All in one for your remote team chats, collaboration and track
              projects
            </div>
            <div className="pt-[70px] flex gap-6">
              <input
                type={"text"}
                value={headerValue}
                className="bg-white h-14 w-[316px] rounded pl-4 focus:outline-none text-gray-600 border border-black"
                placeholder="Email"
                onChange={(el) => {
                  setValue(el.target.value);
                }}
              />
              <button
                className="bg-sky-400 font-RouterStyle px-6 py-[15px] rounded-md text-white hover:text-sky-200 hover:bg-blue-500"
                onClick={() => GetAccess()}
              >
                Get early access
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Header;
