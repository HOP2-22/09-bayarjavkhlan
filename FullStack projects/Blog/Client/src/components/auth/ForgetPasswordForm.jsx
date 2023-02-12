import React, { useState } from "react";

import { AiOutlineCheck, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ForgetPasswordForm = () => {
  const [check, setCheck] = useState(false);

  const [passwordType, setPasswordType] = useState(true);

  return (
    <div className="flex flex-col gap-[30px] lg:gap-10 xl:gap-12 2xl:gap-16">
      <div className="flex gap-[10px] flex-col ">
        <label className="text-white lg:text-[18px] xl:text-[20px]">Name</label>
        <div className="grid gap-5 grid-cols-2">
          <input
            type="text"
            placeholder="firstname"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-3 xl:pl-6 2xl:pl-8 4xl:pl-10"
          />
          <input
            type="text"
            placeholder="lastname"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-3 xl:pl-6 2xl:pl-8 4xl:pl-10"
          />
        </div>
      </div>
      <div className="flex gap-[10px] flex-col ">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          Email
        </label>
        <input
          type="text"
          placeholder="Example00@exampleMail.com"
          className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          password
        </label>
        <div className="relative">
          <input
            type={passwordType ? "password" : "text"}
            placeholder="••••••••••••••••••••••"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
          />
          <div className="absolute mr-2 lg:mr-5 w-10 h-10 flex items-center justify-center right-0 top-1">
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
        <p className="text-white font-semibold">
          Agree with terms and conditions
        </p>
      </div>
      <button className="w-full lg:text-[18px] xl:text-[20px] text-center py-4 rounded-[10px] bg-[#FC728B] hover:bg-[#df4863] transition-colors cursor-pointer ">
        Register
      </button>
    </div>
  );
};

export default ForgetPasswordForm;
