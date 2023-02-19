import React from "react";

import AuthLeft from "../../components/auth/AuthLeft";
import LoginRight from "../../components/auth/LoginRight";

const Login = () => {
  return (
    <div className="pt-[60px] w-full grow h-full bg-[#202433] grid grid-cols-1 md:grid-cols-2">
      <AuthLeft />
      <LoginRight />
    </div>
  );
};

export default Login;
