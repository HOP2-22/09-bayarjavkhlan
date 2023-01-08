import React from "react";
import { useNavigate } from "react-router-dom";
import Option from "./Option";

const Nav = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="w-full h-20">
      <div className="flex items-start justify-end gap-10 px-20 pt-14">
        <div className="pt-1 text-main hover:text-green-accent-700 text-[20px] font-bold cursor-pointer">
          Хэрхэн ажилладаж вэ?
        </div>
        {pathname === "/" ? (
          <div
            className="bg-main hover:bg-green-accent-700 rounded-[100px] px-[45px] py-2 font-bold text-white text-[20px] cursor-pointer"
            onClick={handleClick}
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
