import React, { useRef, useState } from "react";

import { AiOutlineCheck, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignupForm = ({ info, setInfo, sendVerifyCode }) => {
  const [check, setCheck] = useState(false);

  const [passwordType, setPasswordType] = useState(true);

  const firstRef = useRef();
  const lastRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFirst = (event) => {
    setInfo({ ...info, first: event.target.value });
  };

  const handleLast = (event) => {
    setInfo({ ...info, last: event.target.value });
  };

  const handleEmail = (event) => {
    setInfo({ ...info, email: event.target.value });
  };

  const handlePassword = (event) => {
    setInfo({ ...info, password: event.target.value });
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleRegister();
    }
  };

  const handleRegister = () => {
    info.first.length === 0
      ? firstRef.current.focus()
      : info.last.length === 0
      ? lastRef.current.focus()
      : info.email.length === 0
      ? emailRef.current.focus()
      : info.password.length === 0
      ? passwordRef.current.focus()
      : sendVerifyCode();
  };

  return (
    <div className="flex flex-col gap-[30px] lg:gap-10 xl:gap-12 2xl:gap-16">
      <div className="flex gap-[10px] flex-col ">
        <label className="text-white lg:text-[18px] xl:text-[20px]">Name</label>
        <div className="grid gap-5 grid-cols-2">
          <input
            type="text"
            placeholder="firstname"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-3 xl:pl-6 2xl:pl-8 4xl:pl-10"
            onChange={handleFirst}
            ref={firstRef}
            value={info.first}
            onKeyDown={handleOnKeyDown}
          />
          <input
            type="text"
            placeholder="lastname"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-3 xl:pl-6 2xl:pl-8 4xl:pl-10"
            onChange={handleLast}
            ref={lastRef}
            value={info.last}
            onKeyDown={handleOnKeyDown}
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
          onChange={handleEmail}
          ref={emailRef}
          value={info.email}
          onKeyDown={handleOnKeyDown}
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
            onChange={handlePassword}
            value={info.password}
            ref={passwordRef}
            onKeyDown={handleOnKeyDown}
          />
          <div className="absolute mr-2 lg:mr-5 w-10 h-10 flex items-center justify-center cursor-pointer right-0 top-2">
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
      <div
        className="w-full lg:text-[18px] xl:text-[20px] text-center py-4 rounded-[10px] bg-[#FC728B] hover:bg-[#df4863] transition-colors cursor-pointer"
        onClick={handleRegister}
      >
        Register
      </div>
    </div>
  );
};

export default SignupForm;
