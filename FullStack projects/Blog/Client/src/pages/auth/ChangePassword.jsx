import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ChangePassword = () => {
  const [passwordValue, setPasswordValue] = useState({
    first: "",
    last: "",
  });

  const [passwordType, setPasswordType] = useState(true);

  const handleFirst = (event) => {
    event.preventDefault();
    setPasswordValue({ ...passwordValue, first: event.target.value });
  };

  const handleLast = (event) => {
    event.preventDefault();
    setPasswordValue({ ...passwordValue, last: event.target.value });
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
    }
  };

  return (
    <div className="bg-[#202433] w-full flex items-center justify-center md:min-h-[65vh] lg:min-h-[75vh] xl:min-h-[72vh] 2xl:min-h-[80vh] 7xl:min-h-[85vh]">
      <div className="flex flex-col gap-[10px]">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          New password
        </label>
        <div className="relative">
          <input
            type={passwordType ? "password" : "text"}
            placeholder="••••••••••••••••••••••"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
            onChange={handleFirst}
            value={passwordValue.first}
            q
            onKeyDown={handleOnKeyDown}
          />
          <div className="absolute mr-2 lg:mr-5 w-10 h-10 flex items-center justify-center cursor-pointer right-0 top-2">
            <AiFillEye
              className={`${
                passwordType ? "block" : "hidden"
              } text-[30px] text-white`}
              onClick={() => {
                setPasswordType(false);
              }}
            />
            <AiFillEyeInvisible
              className={`${
                passwordType ? "hidden" : "block"
              } text-[30px] text-white`}
              onClick={() => {
                setPasswordType(true);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          Confirm password
        </label>
        <div className="relative">
          <input
            type={passwordType ? "password" : "text"}
            placeholder="••••••••••••••••••••••"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
            onChange={handleLast}
            value={passwordValue.last}
            q
            onKeyDown={handleOnKeyDown}
          />
          <div className="absolute mr-2 lg:mr-5 w-10 h-10 flex items-center justify-center cursor-pointer right-0 top-2">
            <AiFillEye
              className={`${
                passwordType ? "block" : "hidden"
              } text-[30px] text-white`}
              onClick={() => {
                setPasswordType(false);
              }}
            />
            <AiFillEyeInvisible
              className={`${
                passwordType ? "hidden" : "block"
              } text-[30px] text-white`}
              onClick={() => {
                setPasswordType(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
