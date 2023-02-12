import React from "react";
import { Link } from "react-router-dom";

import { HeaderTitles } from "../layoutdata";
import MobileNavbarItem from "./MobileNavbarItem";

const MobileNavbar = ({ hamburger, setHamburger }) => {
  return (
    <div
      className={`${
        hamburger ? "translate-y-0 block" : "-translate-y-96 hidden"
      } z-10 md:hidden divide-y w-full bg-white shadow-xl`}
    >
      {HeaderTitles.map((item, index) => {
        return (
          <MobileNavbarItem
            title={item.name}
            key={index}
            link={item.link}
            setHamburger={setHamburger}
          />
        );
      })}
      <div className="w-full flex justify-center py-3">
        <Link
          className={`py-[10px] px-6  border rounded-[10px] cursor-pointer transition-color duration-400 text-[#6e6c68] border-[#82807e] hover:text-white hover:bg-[#82807e]
        `}
        >
          Get access
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
