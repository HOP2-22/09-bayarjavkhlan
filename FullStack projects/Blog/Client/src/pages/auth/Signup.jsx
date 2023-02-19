import React from "react";

import AuthLeft from "../../components/auth/AuthLeft";
import SignupRight from "../../components/auth/SignupRight";

const Signup = () => {
  return (
    <div className="pt-[60px] w-full grow h-full bg-[#202433] pt-[60px] grid grid-cols-1 md:grid-cols-2">
      <AuthLeft />
      <SignupRight />
    </div>
  );
};

export default Signup;
