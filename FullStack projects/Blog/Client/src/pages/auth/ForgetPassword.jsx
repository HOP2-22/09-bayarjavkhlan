import React from "react";

import AuthLeft from "../../components/auth/AuthLeft";
import ForgetPasswordRight from "../../components/auth/ForgetPasswordRight";

const ForgetPassword = () => {
  return (
    <div className="bg-[#202433] pt-[60px] grid grid-cols-1 md:grid-cols-2 md:min-h-[65vh] lg:min-h-[75vh] xl:min-h-[72vh] 2xl:min-h-[80vh] 7xl:min-h-[85vh]">
      <AuthLeft />
      <ForgetPasswordRight />
    </div>
  );
};

export default ForgetPassword;
