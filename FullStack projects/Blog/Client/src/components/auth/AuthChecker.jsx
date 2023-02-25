import React from "react";

import { AiOutlineCheck } from "react-icons/ai";

const AuthChecker = ({ check, setCheck, title }) => {
  return (
    <div className="flex items-center gap-[15px]">
      <div
        className={`w-[18px] h-[18px] rounded flex items-center justify-center cursor-pointer ${
          check ? "bg-white/80" : "bg-[#33394F]"
        }`}
        onClick={() => {
          setCheck(!check);
        }}
      >
        <AiOutlineCheck className="text-[#33394F]" />
      </div>
      <p className="text-white font-semibold">{title}</p>
    </div>
  );
};

export default AuthChecker;
