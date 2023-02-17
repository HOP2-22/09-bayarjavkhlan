import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import SignupForm from "./SignupForm";
import Verify from "./Verify";
import { Context } from "../../provider/Context";

const SignupRight = () => {
  const navigate = useNavigate();

  const { setVerify, handleToTop, verify } = useContext(Context);

  const [info, setInfo] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  const sendVerifyCode = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/auth/verify",
        {
          email: info.email,
        }
      );
      setVerify(true);
      handleToTop();

      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  const register = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/auth/signup",
        {
          firstName: info.first,
          lastName: info.last,
          email: info.email,
          password: info.password,
        }
      );

      alert(response.data.message);

      navigate("/register/login");
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  const handleEmpty = () => {
    setInfo({
      first: "",
      last: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className={`${
          verify ? "hidden" : "flex"
        } w-full py-16  flex-col justify-center px-10 md:px-0 md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-2/3 3xl:w-[63%] 4xl:w-[59%] 5xl:w-[55%]`}
      >
        <p className="text-Black text-[32px] lg:text-[36px] xl:text-[40px] font-semibold text-white/90 leading-[38px] pb-[10px] lg:pb-6">
          Register
        </p>
        <p className="text-white/60 pb-[30px] lg:pb-10">
          Enter your user details below.
        </p>
        <SignupForm
          info={info}
          setInfo={setInfo}
          sendVerifyCode={sendVerifyCode}
        />
        <p className="w-full text-center pt-12 text-white/60">
          Have an account?
          <span className="pl-3 lg:pl-5 text-[#FC728B] hover:text-[#df4863] transition-colors cursor-pointer">
            <Link to={"/register/login"}>Login!</Link>
          </span>
        </p>
      </div>
      <Verify
        register={register}
        handleEmpty={handleEmpty}
        email={info.email}
      />
    </div>
  );
};

export default SignupRight;
