import React, { useContext, useRef, useEffect } from "react";
import { Context } from "../context/Context";

import Logo from "../img/boginoo1.png";
import { FaSpinner } from "react-icons/fa";

const VerifyCreate = () => {
  const {
    loading,
    verifyValue,
    checkVerifyLoginCode,
    setVerifyValue,
    VerifyCode,
    navigateToSlash,
  } = useContext(Context);

  const verifyRef = useRef();

  useEffect(() => {
    if (VerifyCode === null) {
      navigateToSlash();
    }
  }, []);

  useEffect(() => {
    if (verifyValue.length === 5) {
      verifyRef.current.focus();
    }
  }, [verifyValue]);

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
        <div className="font-extrabold text-main text-[20px]">
          Баталгаажуулах
        </div>
        <div className="pt-8 flex flex-col items-center">
          <input
            type="text"
            value={verifyValue}
            onChange={(e) => {
              setVerifyValue(e.target.value);
            }}
            className="w-[450px] h-14 py-4 px-6 text-7xl tracking-[58px] rounded-full text-main focus:outline-0"
          />
          <input
            ref={verifyRef}
            type="text"
            className="absolute -z-10 w-1 h-1 focus:outline-0"
          />
          <div className="h- z-50 flex gap-[40px]">
            <div className="h-1 w-[50px] bg-main"></div>
            <div className="h-1 w-[50px] bg-main"></div>
            <div className="h-1 w-[50px] bg-main"></div>
            <div className="h-1 w-[50px] bg-main"></div>
            <div className="h-1 w-[50px] bg-main"></div>
          </div>
        </div>
        <div
          className="bg-main hover:bg-green-accent-700 transition-colors duration-200 rounded-[100px] px-[45px] mt-5 py-2 font-bold text-white text-[20px] cursor-pointer"
          onClick={() => {
            checkVerifyLoginCode();
          }}
        >
          Илгээх
        </div>
      </div>
    </div>
  );
};

export default VerifyCreate;
