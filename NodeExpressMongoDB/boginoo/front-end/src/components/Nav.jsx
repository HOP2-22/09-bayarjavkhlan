import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [LogIn, setLogIn] = useState(false);
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-end gap-10 px-20 pt-14">
        <div className="text-main text-[20px] font-bold">
          Хэрхэн ажилладаж вэ?
        </div>
        {pathname === "/" ? (
          <div
            className="bg-main rounded-[100px] px-[45px] py-2 font-bold text-white text-[20px] cursor-pointer"
            onClick={handleClick}
          >
            Нэвтрэх
          </div>
        ) : pathname === "/Loged" ? (
          <div className="px-[45px] py-2 font-semibold text-gray-900 text-[20px]">
            {/* {User.name} */}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Nav;
