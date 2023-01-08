import React, { useContext } from "react";
import { Context } from "../context/Context";

import Logo from "../img/boginoo1.png";
import { FaSpinner } from "react-icons/fa";

const ForgetPass = () => {
  const { loading, forgetEmailValue, setForgetEmailValue, checkEmail } =
    useContext(Context);

  return (
    <>
      <button
        disabled
        className={`${
          loading ? "flex" : "hidden"
        } justify-center items-center bg-green-600 py-4 px-6 my-10 rounded-lg`}
      >
        <FaSpinner className=" h-7 w-7 mr-3 animate-spin" color="white" />
        <p className="font-semibold pt-2 text-white"> Loading</p>
      </button>
      <div
        className={`${loading ? "hidden" : "flex"} flex flex-col items-center`}
      >
        <img src={Logo} alt="" className="logInLogo" />
        <div className="font-extrabold text-main text-[20px]">
          Нууц үг сэргээх
        </div>
        <p className="text-center pt-4 lg:pt-6">
          Бид таны цахим хаяг руу нууц үг <br />
          сэргээх хаяг явуулах болно.
        </p>
        <div className="logInEmail">
          <p className="px-2 py-1">Цахим хаяг</p>
          <input
            type="text"
            value={forgetEmailValue}
            onChange={(e) => {
              setForgetEmailValue(e.target.value);
            }}
            placeholder="write your email address"
            className="border-[#F0F0F0] logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0"
          />
        </div>
        <div
          className="bg-main rounded-[100px] px-[45px] py-2 font-bold text-white text-[20px] cursor-pointer"
          onClick={() => {
            checkEmail();
          }}
        >
          Илгээх
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
