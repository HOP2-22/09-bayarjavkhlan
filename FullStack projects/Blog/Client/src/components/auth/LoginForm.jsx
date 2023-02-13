import React, { useContext, useState } from "react";

import { AiOutlineCheck, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Context } from "../../provider/Context";

const LoginForm = ({ email, password, setEmail, setPassword }) => {
  const { setVerify, handleToTop } = useContext(Context);

  const [check, setCheck] = useState(false);

  const [passwordType, setPasswordType] = useState(true);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form className="flex flex-col gap-[30px] lg:gap-10 xl:gap-12 2xl:gap-16">
      <div className="flex gap-[10px] flex-col ">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          Email
        </label>
        <input
          type="text"
          placeholder="Example00@exampleMail.com"
          className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
          onChange={handleEmail}
          value={email}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="w-full flex items-center justify-between">
          <p className="text-white lg:text-[18px] xl:text-[20px]">password</p>
          <p className="lg:text-[18px] xl:text-[20px] text-[#FC728B] hover:text-[#df4863] transition-colors cursor-pointer">
            Forget Password
          </p>
        </label>
        <div className="relative">
          <input
            type={passwordType ? "password" : "text"}
            placeholder="••••••••••••••••••••••"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
            onChange={handlePassword}
            value={password}
          />
          <div className="absolute mr-2 lg:mr-5 w-10 h-10 flex items-center justify-center right-0 top-2">
            <AiFillEye
              className={`${
                passwordType ? "block" : "hidden"
              } text-[30px] text-white`}
              onClick={() => {
                setPasswordType(false);
              }}
            />
            <AiFillEyeInvisible
              className={`${
                passwordType ? "hidden" : "block"
              } text-[30px] text-white`}
              onClick={() => {
                setPasswordType(true);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[15px]">
        <div
          className={`w-[18px] h-[18px] rounded flex items-center justify-center cursor-pointer ${
            check ? "bg-white/80" : "bg-[#33394F]"
          }`}
          onClick={() => {
            setCheck(!check);
          }}
        >
          <AiOutlineCheck className="text-[#33394F]" />
        </div>
        <p className="text-white font-semibold">Remember me</p>
      </div>
      <div
        className="w-full lg:text-[18px] xl:text-[20px] text-center py-4 rounded-[10px] bg-[#FC728B] hover:bg-[#df4863] transition-colors cursor-pointer "
        onClick={() => {
          setVerify(true);
          handleToTop();
        }}
      >
        Login
      </div>
    </form>
  );
};

export default LoginForm;
