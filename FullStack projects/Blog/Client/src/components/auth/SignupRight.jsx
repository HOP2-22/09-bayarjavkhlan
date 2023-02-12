import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignupForm from "./SignupForm";
import Verify from "./Verify";

const SignupRight = () => {
  const [verify, setVerify] = useState(false);
  const [verifyValue, setVerifyValue] = useState("");

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative w-full flex justify-center">
      <div className="relative w-full py-16 flex flex-col justify-center px-10 md:px-0 md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-2/3 3xl:w-[63%] 4xl:w-[59%] 5xl:w-[55%]">
        <p className="text-Black text-[32px] lg:text-[36px] xl:text-[40px] font-semibold text-white/90 leading-[38px] pb-[10px] lg:pb-6">
          Register
        </p>
        <p className="text-white/60 pb-[30px] lg:pb-10">
          Enter your user details below.
        </p>
        <SignupForm
          setVerify={setVerify}
          first={first}
          setFirst={setFirst}
          last={last}
          setLast={setLast}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <p className="w-full text-center pt-12 text-white/60">
          Have an account?
          <span className="pl-3 lg:pl-5 text-[#FC728B] hover:text-[#df4863] transition-colors cursor-pointer">
            <Link to={"/register/login"}>Login!</Link>
          </span>
        </p>
      </div>
      <Verify
        setVerifyValue={setVerifyValue}
        verifyValue={verifyValue}
        verify={verify}
        email={email}
      />
    </div>
  );
};

export default SignupRight;
