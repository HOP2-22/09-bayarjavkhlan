import React, { useContext } from "react";
import { Context } from "../context/Context";
import Option from "./Option";

const Nav = () => {
  const { navigateToLogin } = useContext(Context);
  const pathname = window.location.pathname;

  return (
    <div className="w-full h-20">
      <div className="flex items-center justify-end gap-6 sm:gap-10 px-10 sm:px-20 pt-10 sm:pt-14">
        <div className="pt-1 text-main hover:text-green-accent-700 transition-colors duration-200 ease-in md:text-[20px] font-medium sm:font-bold cursor-pointer">
          Хэрхэн ажилладаж вэ?
        </div>
        {pathname === "/" ? (
          <div
            className="bg-main hover:bg-green-accent-700 transition-colors duration-200 ease-in rounded-[100px] px-5 sm:px-[45px] py-1 sm:py-2 font-semibold sm:font-bold text-white text-[20px] cursor-pointer"
            onClick={() => {
              navigateToLogin();
            }}
          >
            Нэвтрэх
          </div>
        ) : pathname === "/home" ? (
          <Option />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Nav;
