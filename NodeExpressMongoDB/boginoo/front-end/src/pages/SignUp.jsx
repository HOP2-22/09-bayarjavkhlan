import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/boginoo1.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const SignUp = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [passVerifyValue, setPassVerifyValue] = useState("");
  const [pass, setPass] = useState(true);
  const [passVerify, setPassVerify] = useState(true);
  const [errorMail, setErrorMail] = useState(true);
  const [errorPass, setErrorPass] = useState(true);

  const navigate = useNavigate();

  function handleClickLogIn() {
    navigate("/login");
  }

  return (
    <div className="flex flex-col items-center">
      <img src={Logo} alt="" className="logInLogo" />
      <div className="font-extrabold text-main text-[20px]">Бүртгүүлэх</div>
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
            errorMail ? "border-[#F0F0F0]" : "border-red-accent-400"
          } logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0 `}
        />
      </div>
      <div className="sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8">
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
            } relative logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0 `}
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
            } relative logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0 `}
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
        className="bg-main rounded-[100px] px-[45px] mt-5 py-2 font-bold text-white text-[20px] cursor-pointer"
        onClick={() => {
          if (
            emailValue.includes(".com") &&
            emailValue.includes("@") &&
            passValue === passVerifyValue
          ) {
            handleClickLogIn();
          } else {
            !emailValue.includes(".com") && !emailValue.includes("@")
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
  );
};

export default SignUp;
