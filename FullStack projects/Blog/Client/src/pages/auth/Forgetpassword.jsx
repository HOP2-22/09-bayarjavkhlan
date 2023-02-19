import React from "react";

import AuthLeft from "../../components/auth/AuthLeft";
import ForgetPasswordRight from "../../components/auth/ForgetPasswordRight";

const ForgetPassword = () => {
  return (
    <div className="pt-[60px] w-full grow h-full bg-[#202433] grid grid-cols-1 md:grid-cols-2">
      <AuthLeft />
      <ForgetPasswordRight />
    </div>
  );
};

export default ForgetPassword;
