import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ChangePasswordInputs = ({
  handleNew,
  handleConfirm,
  handleOnKeyDown,
  passwordValue,
}) => {
  const [newType, setNewType] = useState(true);

  return (
    <div className="w-full items-center justify-center flex flex-col gap-10">
      <div className="changePasswordElementFatherDiv">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          New password
        </label>
        <div className="relative">
          <input
            type={newType ? "password" : "text"}
            placeholder="••••••••••••••••••••••"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
            onChange={handleNew}
            value={passwordValue.first}
            onKeyDown={handleOnKeyDown}
          />
          <div className="absolute mr-2 lg:mr-5 w-10 h-10 flex items-center justify-center cursor-pointer right-0 top-2">
            <AiFillEye
              className={`${
                newType ? "block" : "hidden"
              } text-[30px] text-white`}
              onClick={() => {
                setNewType(false);
              }}
            />
            <AiFillEyeInvisible
              className={`${
                newType ? "hidden" : "block"
              } text-[30px] text-white`}
              onClick={() => {
                setNewType(true);
              }}
            />
          </div>
        </div>
      </div>
      <div className="changePasswordElementFatherDiv">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          Confirm password
        </label>
        <input
          type="password"
          placeholder="••••••••••••••••••••••"
          className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
          onChange={handleConfirm}
          value={passwordValue.last}
          onKeyDown={handleOnKeyDown}
        />
      </div>
    </div>
  );
};

export default ChangePasswordInputs;
