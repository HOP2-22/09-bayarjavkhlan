import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";

const ForgetPasswordRight = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");

  const handleEmail = (event) => {
    setEmailValue(event.target.value);
  };

  const emailRef = useRef();

  const handleSubmit = () => {
    emailValue.length === 0 ? emailRef.current.focus() : sentEmail();
  };

  const sentEmail = async () => {
    try {
      await axios.post("/user/auth/forgotPassword", {
        email: emailValue,
      });

      setEmailValue("");
      navigate("/register/login");
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      if (emailValue.length === 0) {
        emailRef.current.focus();
      } else {
        sentEmail();
      }
    }
  };

  return (
    <div className="w-full h-2/3 flex justify-center items-center">
      <div className="w-full py-16  flex-col justify-center px-10 md:px-0 md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-2/3 3xl:w-[63%] 4xl:w-[59%] 5xl:w-[55%]">
        <p className="text-Black text-[32px] lg:text-[36px] xl:text-[40px] font-semibold text-white/90 leading-[38px] pb-[10px] lg:pb-6">
          Forget Password
        </p>
        <p className="text-white/60 pb-[30px] lg:pb-10">
          We will send you email, write your email address
        </p>
        <div className="flex gap-[10px] flex-col pb-5">
          <label className="text-white lg:text-[18px] xl:text-[20px]">
            Email
          </label>
          <input
            type="text"
            placeholder="Example00@exampleMail.com"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
            onChange={handleEmail}
            value={emailValue}
            ref={emailRef}
            onKeyDown={handleOnKeyDown}
          />
        </div>
        <div className="w-full flex justify-center">
          <div
            className="w-[150px] lg:text-[18px] xl:text-[20px] text-center py-3 rounded-[10px] bg-[#FC728B] hover:bg-[#df4863] transition-colors cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </div>
        </div>
        <p className="w-full text-center pt-12 text-white/60">
          If you Remember your password,
          <span className="pl-3 lg:pl-5 text-[#FC728B] hover:text-[#df4863] transition-colors cursor-pointer">
            <Link to={"/register/login"} className="cursor-pointer">
              Login!
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgetPasswordRight;
