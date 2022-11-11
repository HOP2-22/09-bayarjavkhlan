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
        className="w-full h-[1080px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="h-full flex items-center">
          <div className="w-2/5 pl-40">
            <div className="text-5xl text-white font-bold leading-[60px]">
              Instant collaborations for remote teams
            </div>
            <div className="w-2/3 pt-[22px] text-white text-xl leading-[30px] font-mulish">
              All in one for your remote team chats, collaboration and track
              projects
            </div>
            <div className="pt-[70px] flex gap-6">
              <input
                type={"text"}
                value={headerValue}
                className="bg-white w-[316px] h-14  pl-4 text-gray-600 border border-black rounded focus:outline-none"
                placeholder="Email"
                onChange={(el) => {
                  setValue(el.target.value);
                }}
              />
              <button
                className="bg-sky-400 py-[15px] px-6 text-white font-RouterStyle rounded-md hover:text-sky-200 hover:bg-blue-500 md:w-60 2xl:w-auto"
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
