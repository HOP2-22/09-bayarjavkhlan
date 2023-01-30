import React, { useState, useContext } from "react";
import { Context } from "../context/Context";

import Logo from "../img/boginoo1.png";
import { FaSpinner } from "react-icons/fa";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const SignUp = () => {
  const {
    loading,
    toVerify,
    emailValue,
    setEmailValue,
    passValue,
    setPassValue,
  } = useContext(Context);

  const [passVerifyValue, setPassVerifyValue] = useState("");

  const [pass, setPass] = useState(true);
  const [passVerify, setPassVerify] = useState(true);
  const [errorMail, setErrorMail] = useState(true);
  const [errorPass, setErrorPass] = useState(true);

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
      <div className={`${loading ? "hidden" : "flex"} flex-col items-center`}>
        <img src={Logo} alt="" className="logInLogo" />
        <div className="font-extrabold text-main text-[20px]">Бүртгүүлэх</div>
        <div className="logInEmail">
          <p className="px-2 py-1">Цахим хаяг</p>
          <input
            type="email"
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
            placeholder="write your email address"
            className={`${
              errorMail ? "border-[#F0F0F0]" : "border-red-accent-400"
            } logWidth h-7 py-3 sm:py-4 px-6 border rounded-full text-main focus:outline-0 `}
          />
        </div>
        <div className="sm:pb-4 md:pb-5 lg:pb-6 xl:pb-7">
          <p className="px-2 py-1 font-ubuntu">Нууц үг</p>
          <div className="relative">
            <input
              type={pass ? "password" : "text"}
              value={passValue}
              onChange={(e) => {
                setPassValue(e.target.value);
              }}
              placeholder="write your password"
              className={`${
                errorPass ? "border-[#F0F0F0]" : "border-red-accent-400"
              } relative logWidth h-7 py-3 sm:py-4 px-6 border rounded-full text-main focus:outline-0 `}
            />
            {pass ? (
              <EyeIcon
                className="passEyeIcon cursor-pointer"
                onClick={() => {
                  setPass(!pass);
                }}
              />
            ) : (
              <EyeSlashIcon
                className="passEyeIcon cursor-pointer"
                onClick={() => {
                  setPass(!pass);
                }}
              />
            )}
          </div>
        </div>
        <div className="">
          <p className="px-2 py-1 font-ubuntu">Нууц үг</p>
          <div className="relative">
            <input
              type={passVerify ? "password" : "text"}
              value={passVerifyValue}
              onChange={(e) => {
                setPassVerifyValue(e.target.value);
              }}
              placeholder="write your password"
              className={`${
                errorPass ? "border-[#F0F0F0]" : "border-red-accent-400"
              } relative logWidth h-7 py-3 sm:py-4 px-6 border rounded-full text-main focus:outline-0 `}
            />
            {passVerify ? (
              <EyeIcon
                className="passEyeIcon cursor-pointer"
                onClick={() => setPassVerify(!passVerify)}
              />
            ) : (
              <EyeSlashIcon
                className="passEyeIcon cursor-pointer"
                onClick={() => setPassVerify(!passVerify)}
              />
            )}
          </div>
        </div>
        <div
          className="button mt-3 sm:mt-0"
          onClick={() => {
            if (
              emailValue.includes(".com") &&
              emailValue.includes("@") &&
              passValue === passVerifyValue
            ) {
              toVerify();
              setPassVerifyValue("");
            } else {
              emailValue.includes(".com") || emailValue.includes("@")
                ? setErrorMail(false)
                : setErrorMail(true);
              passValue !== passVerifyValue || passValue.length === 0
                ? setErrorPass(false)
                : setErrorPass(true);
            }
          }}
        >
          Бүртгүүлэх
        </div>
      </div>
    </>
  );
};

export default SignUp;
