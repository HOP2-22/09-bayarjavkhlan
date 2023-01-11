import React, { useContext } from "react";
import { Context } from "../context/Context";
import Option from "./Option";

const Nav = () => {
  const { navigateToLogin } = useContext(Context);
  const pathname = window.location.pathname;

  return (
    <div className="w-full h-20">
      <div className="flex items-start justify-end gap-10 px-20 pt-14">
        <div className="pt-1 text-main hover:text-green-accent-700 transition-colors duration-200 ease-in text-[20px] font-bold cursor-pointer">
          Хэрхэн ажилладаж вэ?
        </div>
        {pathname === "/" ? (
          <div
            className="bg-main hover:bg-green-accent-700 transition-colors duration-200 ease-in rounded-[100px] px-[45px] py-2 font-bold text-white text-[20px] cursor-pointer"
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
