import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/boginoo1.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const ForgetPass = () => {
  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState(true);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="flex flex-col items-center">
      <img src={Logo} alt="" className="logInLogo" />
      <div className="font-extrabold text-main text-[20px]">
        Нууц үг сэргээх
      </div>
      <p className="text-center pt-4 lg:pt-6">
        Бид таны цахим хаяг руу нууц үг <br />
        сэргээх хаяг явуулах болно.
      </p>
      <p className={`${error ? "hidden" : "text-red-accent-400"}`}>
        Зөв цахим хаягаа оруулна уу
      </p>
      <div className="logInEmail">
        <p className="px-2 py-1">Цахим хаяг</p>
        <input
          type="text"
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          placeholder="write your email address"
          className={`${
            error ? "border-[#F0F0F0]" : "border-red-accent-400"
          } logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0`}
        />
      </div>
      <div
        className="bg-main rounded-[100px] px-[45px] py-2 font-bold text-white text-[20px] cursor-pointer"
        onClick={() => {
          if (emailValue.includes(".com") && emailValue.includes("@")) {
            handleClick();
          } else {
            setError(false);
          }
        }}
      >
        Илгээх
      </div>
    </div>
  );
};

export default ForgetPass;
