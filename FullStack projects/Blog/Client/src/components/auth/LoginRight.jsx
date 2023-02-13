import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";
import Verify from "./Verify";
import { Context } from "../../provider/Context";

const LoginRight = () => {
  const { verify } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full flex justify-center">
      <div
        className={`${
          verify ? "hidden" : "flex"
        } w-full py-16 flex-col justify-center px-10 md:px-0 md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-2/3 3xl:w-[63%] 4xl:w-[59%] 5xl:w-[55%]`}
      >
        <div className="flex flex-col gap-[30px]">
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#f7f5f5]/[95%] shadow text-[#363A47] font-serif text-[22px]">
            A
          </div>
          <p className="text-Black text-[32px] lg:text-[36px] xl:text-[40px] font-semibold text-white/90 leading-[38px] pb-[10px] lg:pb-6">
            Login
          </p>
        </div>
        <p className="text-white/60 pb-[30px] lg:pb-10">
          You can login with your registered account or quick login with your
          Google account.
        </p>
        <div className="bg-white w-full py-[10px] flex items-center justify-center gap-4 rounded-[10px] mb-[30px] lg:mb-10 hover:bg-gray-200 transition-colors cursor-pointer">
          <FcGoogle className="text-[27px]" />
          <p className="text-gray-900 font-semibold">Login with Google</p>
        </div>
        <div className="flex items-center justify-between pb-5 lg:pb-7">
          <div className="h-[2px] bg-[#33394F] rounded-xl grow"></div>
          <p className="px-3 text-white">or</p>
          <div className="h-[2px] bg-[#33394F] rounded-xl grow"></div>
        </div>
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <p className="w-full text-center pt-12 text-white/60">
          Don’t have an account?
          <span className="pl-3 lg:pl-5 text-[#FC728B] hover:text-[#df4863] transition-colors cursor-pointer">
            <Link to={"/register/signup"}>Create one!</Link>
          </span>
        </p>
      </div>
      <Verify email={email} />
    </div>
  );
};

export default LoginRight;
