import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/boginoo1.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const LogIn = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [pass, setPass] = useState(true);

  const navigate = useNavigate();

  function handleClickForgetPassword() {
    navigate("/forgetpassword");
  }

  function handleClickSignUp() {
    navigate("/signup");
  }

  function handleClickLogIn() {
    navigate("/home");
  }

  return (
    <div className="flex flex-col items-center">
      <img src={Logo} alt="" className="logInLogo" />
      <div className="font-extrabold text-main text-[20px]">Нэвтрэх</div>
      <div className="logInEmail">
        <p className="px-2 py-1">Цахим хаяг</p>
        <input
          type="text"
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          placeholder="write your email address"
          className="logWidth h-7 py-4 px-6 border border-[#F0F0F0] rounded-full text-main focus:outline-0"
        />
      </div>
      <div className="">
        <p className="px-2 py-1 font-ubuntu">Нууц үг</p>
        <div className="relative">
          <input
            type={pass ? "password" : "text"}
            value={passValue}
            onChange={(e) => {
              setPassValue(e.target.value);
            }}
            placeholder="write your password"
            className="relative logWidth h-7 py-4 px-6 border border-[#F0F0F0] rounded-full text-main focus:outline-0 "
          />
          {pass ? (
            <EyeIcon
              className="absolute w-6 fill-main right-4 top-1.5"
              onClick={() => setPass(!pass)}
            />
          ) : (
            <EyeSlashIcon
              className="absolute w-6 fill-main right-4 top-1.5"
              onClick={() => setPass(!pass)}
            />
          )}
        </div>
      </div>
      <div className="logWidth flex justify-between px-3 py-3">
        <div className="text-main">
          <input type="checkbox" /> Намайг сана
        </div>
        <div
          className="cursor-pointer underline"
          onClick={handleClickForgetPassword}
        >
          Нууц үгээ мартсан
        </div>
      </div>
      <div
        className="bg-main rounded-[100px] px-[45px] py-2 font-bold text-white text-[20px] cursor-pointer"
        onClick={handleClickLogIn}
      >
        Нэвтрэх
      </div>
      <p
        className="underline decoration-main text-main pt-2"
        onClick={handleClickSignUp}
      >
        Шинэ хэрэглэгч бол энд дарна уу?
      </p>
    </div>
  );
};

export default LogIn;
