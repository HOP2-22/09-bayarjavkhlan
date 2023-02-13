import React from "react";
import { Link } from "react-router-dom";

import { HeaderTitles } from "../layoutdata";
import Hamburger from "./Hamburger";
import DesktopNavbarItem from "./DesktopNavbarItem";

const DesktopNavbar = ({ path, offset, hamburger, setHamburger }) => {
  return (
    <div
      className={`z-20 w-full h-[60px] flex items-center drop-shadow-lg ${
        path !== "/"
          ? "bg-white"
          : offset >= 100 || hamburger === true
          ? "bg-white"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between px-5 md:px-8 lg:px-20 xl:px-32 4xl:px-48 5xl:px-72 7xl:px-88">
        <Link
          to={"/"}
          className={`text-[33px] md:text-[46px] font-bold flex items-center leading-1 ${
            path !== "/"
              ? "text-dark"
              : offset >= 100 || hamburger === true
              ? "text-gray-800"
              : "text-white"
          }`}
        >
          team
          <span className="bg-sky-bg w-[10px] h-[10px] mt-4 md:mt-6"></span>
        </Link>
        <div className="hidden items-center gap-[30px] md:flex">
          {HeaderTitles.map((item, index) => {
            return (
              <DesktopNavbarItem
                key={index}
                title={item.name}
                link={item.link}
                offset={offset}
              />
            );
          })}
          <Link
            className={`py-[10px] px-6  border  rounded-[10px] cursor-pointer transition-color duration-400 ${
              path !== "/"
                ? "navOffset"
                : offset >= 100
                ? "navOffset"
                : "bg-transparent text-[#ccc8c4] border-[#d5d1ca] hover:text-white hover:border-gray-100"
            }  
              `}
          >
            Get access
          </Link>
        </div>
        <Hamburger
          setHamburger={setHamburger}
          hamburger={hamburger}
          offset={offset}
        />
      </div>
    </div>
  );
};

export default DesktopNavbar;
