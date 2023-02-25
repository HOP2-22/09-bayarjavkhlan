import React, { useRef, useState } from "react";

import AuthButton from "./AuthButton";
import AuthPassword from "./AuthPassword";

import FormInput from "./FormInput";
import SignupChoices from "./SignupChoices";

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

  const handleGenderMale = () => {
    setInfo({ ...info, gender: "male" });
  };

  const handleGenderFemale = () => {
    setInfo({ ...info, gender: "female" });
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

  let Style =
    "text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-3 xl:pl-6 2xl:pl-8 4xl:pl-10";

  return (
    <div className="flex flex-col gap-[30px] lg:gap-10 xl:gap-12 2xl:gap-16">
      <div className="flex gap-[10px] flex-col ">
        <label className="text-white lg:text-[18px] xl:text-[20px]">Name</label>
        <div className="grid gap-5 grid-cols-2">
          <FormInput
            type={"text"}
            placeholder={"firstname"}
            Style={Style}
            stateChanger={handleFirst}
            FormRef={firstRef}
            value={info.first}
            keyDown={handleOnKeyDown}
          />
          <FormInput
            type={"text"}
            placeholder={"lastname"}
            Style={Style}
            stateChanger={handleLast}
            FormRef={lastRef}
            value={info.last}
            keyDown={handleOnKeyDown}
          />
        </div>
      </div>
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
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          password
        </label>
        <AuthPassword
          type={passwordType}
          Style={
            "text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
          }
          handle={handlePassword}
          value={info.password}
          keyDown={handleOnKeyDown}
          setState={setPasswordType}
        />
      </div>
      <SignupChoices
        handleGenderMale={handleGenderMale}
        handleGenderFemale={handleGenderFemale}
        gender={info.gender}
        check={check}
        setCheck={setCheck}
      />
      <AuthButton stateChanger={handleRegister} title={"Register"} />
    </div>
  );
};

export default SignupForm;
