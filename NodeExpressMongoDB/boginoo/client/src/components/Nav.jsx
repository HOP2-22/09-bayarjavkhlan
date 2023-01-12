import React, { useContext } from "react";
import { Context } from "../context/Context";
import Option from "./Option";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const { navigateToLogin, navigateToHome, setLinks } = useContext(Context);
  const pathname = window.location.pathname;

  return (
    <div className="w-full h-20">
      <div className="flex items-start justify-end gap-5 sm:gap-10 px-10 sm:px-20 pt-10 sm:pt-14 sm:pb-14">
        {pathname !== "/history" ? (
          <>
            <div className="pt-1 text-main hover:text-green-accent-700 transition-colors duration-200 ease-in md:text-[20px] font-medium sm:font-bold cursor-pointer">
              Хэрхэн ажилладаж вэ
            </div>
            {pathname === "/" ? (
              <div
                className="button"
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
          </>
        ) : (
          <div className="w-full flex justify-between items-center">
            <div
              className="bg-main flex justify-center items-center w-10 h-10 rounded-full"
              onClick={() => {
                navigateToHome();
                setLinks();
              }}
            >
              <ArrowUturnLeftIcon className="w-5 stroke-2 fill-white" />
            </div>
            <div className="text-2xl text-gray-700">Түүх</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
