import React, { useState } from "react";
import Logo from "../img/boginoo1.png";

const LogIn = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pass, setPass] = useState();

  return (
    <div className="flex flex-col items-center">
      <img src={Logo} alt="" className="pb-[63px]" />
      <div className="font-extrabold text-[#02B589] text-[20px] cursor-pointer">
        Нэвтрэх
      </div>
      <div className="">
        <p className="px-2">Email</p>
        <input
          type="text"
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          placeholder="write your email address"
          className="w-[530px] h-7 py-4 px-6 border border-[#F0F0F0] rounded-full text-[#02B589] focus:outline-0"
        />
      </div>
      <div className="">
        <p className="px-2">password</p>
        <input
          type={pass ? "password" : "text"}
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          placeholder="write your password"
          className="w-[530px] h-7 py-4 px-6 border border-[#F0F0F0] rounded-full text-[#02B589] focus:outline-0"
        />
      </div>
    </div>
  );
};

export default LogIn;
