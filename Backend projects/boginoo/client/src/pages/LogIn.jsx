import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

import Logo from "../img/boginoo1.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa";

const LogIn = () => {
  const {
    loading,
    logIn,
    loginEmailValue,
    setLoginEmailValue,
    loginPasslValue,
    setLoginPassValue,
    navigateToSignup,
    navigateToForgetPass,
  } = useContext(Context);

  const [pass, setPass] = useState(true);

  return (
    <div className="">
      <button
        disabled
        className={`${
          loading ? "flex" : "hidden"
        } justify-center items-center bg-green-600 py-4 px-6 my-10 rounded-lg`}
      >
        <FaSpinner className=" h-7 w-7 mr-3 animate-spin" color="white" />
        <p className="font-semibold pt-2 text-white"> Loading</p>
      </button>
      <div className={`${loading ? "hidden" : "flex"} flex-col items-center`}>
        <img src={Logo} alt="" className="logInLogo" />
        <div className="font-extrabold text-main  text-[20px]">Нэвтрэх</div>
        <div className="logInEmail">
          <p className="px-2 py-1">Цахим хаяг</p>
          <input
            type="text"
            value={loginEmailValue}
            onChange={(e) => {
              setLoginEmailValue(e.target.value);
            }}
            placeholder="write your email address"
            className="logWidth h-6 sm:h-7 py-3 sm:py-4 px-3 sm:px-6 border border-[#F0F0F0] rounded-full text-main focus:outline-0"
          />
        </div>
        <div className="">
          <p className="px-2 py-1 font-ubuntu">Нууц үг</p>
          <div className="relative">
            <input
              type={pass ? "password" : "text"}
              value={loginPasslValue}
              onChange={(e) => {
                setLoginPassValue(e.target.value);
              }}
              placeholder="write your password"
              className="relative logWidth h-6 py-3 sm:py-4 px-6 border border-[#F0F0F0] rounded-full text-main focus:outline-0 "
            />
            {pass ? (
              <EyeIcon className="passEyeIcon" onClick={() => setPass(!pass)} />
            ) : (
              <EyeSlashIcon
                className="passEyeIcon"
                onClick={() => setPass(!pass)}
              />
            )}
          </div>
        </div>
        <div className="logWidth flex justify-between px-3 py-3 text-sm sm:text-base">
          <div className="text-main">
            <input type="checkbox" /> Намайг сана
          </div>
          <div
            className="hover:text-gray-600 cursor-pointer underline"
            onClick={() => {
              navigateToForgetPass();
            }}
          >
            Нууц үгээ мартсан
          </div>
        </div>
        <div
          className="button"
          onClick={() => {
            logIn();
          }}
        >
          Нэвтрэх
        </div>
        <p
          className="text-[14px] sm:text-base underline decoration-main hover:decoration-green-700 transition-colors duration-200 text-main hover:text-green-700 pt-2 cursor-pointer"
          onClick={() => {
            navigateToSignup();
          }}
        >
          Шинэ хэрэглэгч бол энд дарна уу?
        </p>
      </div>
    </div>
  );
};

export default LogIn;
