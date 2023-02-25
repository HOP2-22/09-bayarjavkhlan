import React from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AuthPassword = ({
  type,
  handle,
  Style,
  value,
  PasswordRef,
  keyDown,
  setState,
}) => {
  return (
    <div className="relative">
      <input
        type={type ? "password" : "text"}
        placeholder="••••••••••••••••••••••"
        className={Style}
        onChange={handle}
        value={value}
        ref={PasswordRef}
        onKeyDown={keyDown}
      />
      <div className="absolute mr-2 lg:mr-5 w-10 h-10 flex items-center justify-center cursor-pointer right-0 top-2">
        <AiFillEye
          className={`${type ? "block" : "hidden"} text-[30px] text-white`}
          onClick={() => {
            setState(false);
          }}
        />
        <AiFillEyeInvisible
          className={`${type ? "hidden" : "block"} text-[30px] text-white`}
          onClick={() => {
            setState(true);
          }}
        />
      </div>
    </div>
  );
};

export default AuthPassword;
