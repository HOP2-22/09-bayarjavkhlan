import React, { useContext, useRef, useEffect } from "react";
import { Context } from "../context/Context";

import Logo from "../img/boginoo1.png";
import { FaSpinner } from "react-icons/fa";

const VerifyChange = () => {
  const {
    loading,
    verifyValue,
    setVerifyValue,
    checkVerifyCode,
    forgetUser,
    navigateToSlash,
  } = useContext(Context);

  useEffect(() => {
    if (forgetUser === null) {
      navigateToSlash();
    }
  }, []);

  const inputRef = useRef();

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
        <div
          className="pt-16 pb-10 flex gap-4 sm:gap-7"
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          {new Array(5).fill(0).map((_, index) => (
            <div className="flex w-10 sm:w-16 h-14 sm:h-24 border-2 rounded-lg border-main justify-center items-center text-5xl text-blue-gray-500">
              {verifyValue[index]}
            </div>
          ))}
        </div>
        <input
          type="text"
          ref={inputRef}
          value={verifyValue}
          className="w-[1px] h-[1px] focus:outline-none"
          onChange={(e) => {
            setVerifyValue(e.target.value);
          }}
        />
        <div
          className="button"
          onClick={() => {
            checkVerifyCode();
          }}
        >
          Илгээх
        </div>
      </div>
    </div>
  );
};

export default VerifyChange;
