import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";

import Logo from "../img/boginoo3.png";
import { FaSpinner } from "react-icons/fa";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const ChangePassword = () => {
  const {
    loading,
    changePass,
    changePassValue,
    setChangePassValue,
    changePassVerifyValue,
    setChangePassVerifyValue,
  } = useContext(Context);

  const [pass, setPass] = useState(true);
  const [passVerify, setPassVerify] = useState(true);

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
        <p className="text-center pt-4 lg:pt-6">шинэ нууц үг ээ бичнэ үү </p>
        <div className="sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8">
          <p className="px-2 py-1 font-ubuntu">Нууц үг</p>
          <div className="relative">
            <input
              type={pass ? "password" : "text"}
              value={changePassValue}
              onChange={(e) => {
                setChangePassValue(e.target.value);
              }}
              placeholder="write your password"
              className="border-[#F0F0F0] relative logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0"
            />
            {pass ? (
              <EyeIcon
                className="absolute w-6 fill-main right-4 top-1.5"
                onClick={() => {
                  setPass(!pass);
                }}
              />
            ) : (
              <EyeSlashIcon
                className="absolute w-6 fill-main right-4 top-1.5"
                onClick={() => {
                  setPass(!pass);
                }}
              />
            )}
          </div>
        </div>
        <div className="">
          <p className="px-2 py-1 font-ubuntu">Нууц үг дахин давтах</p>
          <div className="relative">
            <input
              type={passVerify ? "password" : "text"}
              value={changePassVerifyValue}
              onChange={(e) => {
                setChangePassVerifyValue(e.target.value);
              }}
              placeholder="write your password"
              className="border-[#F0F0F0] relative logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0"
            />
            {passVerify ? (
              <EyeIcon
                className="absolute w-6 fill-main right-4 top-1.5"
                onClick={() => setPassVerify(!passVerify)}
              />
            ) : (
              <EyeSlashIcon
                className="absolute w-6 fill-main right-4 top-1.5"
                onClick={() => setPassVerify(!passVerify)}
              />
            )}
          </div>
        </div>
        <div
          className="bg-main hover:bg-green-accent-700 rounded-[100px] px-[45px] mt-5 py-2 font-bold text-white text-[20px] cursor-pointer"
          onClick={() => {
            if (changePassValue === changePassVerifyValue) {
              changePass();
            } else {
              alert("пасс аа адилхан бичнэ үү");
            }
          }}
        >
          Солих
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
