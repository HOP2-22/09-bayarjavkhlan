import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import AuthButton from "./AuthButton";
import AuthChecker from "./AuthChecker";
import AuthPassword from "./AuthPassword";
import FormInput from "./FormInput";

const LoginForm = ({ info, setInfo, login }) => {
  const [check, setCheck] = useState(false);
  const [passwordType, setPasswordType] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleEmail = (event) => {
    setInfo({ ...info, email: event.target.value });
  };

  const handlePassword = (event) => {
    setInfo({ ...info, password: event.target.value });
  };

  const handleLogin = () => {
    info.email.length === 0
      ? emailRef.current.focus()
      : info.password.length === 0
      ? passwordRef.current.focus()
      : login();
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <form className="flex flex-col gap-[30px] lg:gap-10 xl:gap-12 2xl:gap-16">
      <div className="flex gap-[10px] flex-col ">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          Email
        </label>
        <FormInput
          type={"text"}
          placeholder={"Example00@exampleMail.com"}
          Style={
            "text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
          }
          stateChanger={handleEmail}
          FormRef={emailRef}
          value={info.email}
          keyDown={handleOnKeyDown}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="w-full flex items-center justify-between">
          <p className="text-white lg:text-[18px] xl:text-[20px]">password</p>
          <Link
            to={"/register/forgetpassword"}
            className="lg:text-[18px] xl:text-[20px] text-[#FC728B] hover:text-[#df4863] transition-colors cursor-pointer"
          >
            Forget Password
          </Link>
        </label>
        <AuthPassword
          type={passwordType}
          handle={handlePassword}
          Style={
            "text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
          }
          value={info.password}
          PasswordRef={passwordRef}
          keyDown={handleOnKeyDown}
          setState={setPasswordType}
        />
      </div>
      <AuthChecker check={check} setCheck={setCheck} title={"Remember me"} />
      <AuthButton stateChanger={handleLogin} title={"Login"} />
    </form>
  );
};

export default LoginForm;
