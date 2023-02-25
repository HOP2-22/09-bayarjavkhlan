import React, { useState } from "react";
import AuthPassword from "./AuthPassword";
import FormInput from "./FormInput";

const ChangePasswordInputs = ({
  handleNew,
  handleConfirm,
  handleOnKeyDown,
  passwordValue,
  newRef,
  confirmRef,
}) => {
  const [newType, setNewType] = useState(true);

  return (
    <div className="w-full items-center justify-center flex flex-col gap-10">
      <div className="changePasswordElementFatherDiv">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          New password
        </label>
        <AuthPassword
          type={newType}
          handle={handleNew}
          Style={
            "text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
          }
          value={passwordValue.first}
          PasswordRef={newRef}
          keyDown={handleOnKeyDown}
          setState={setNewType}
        />
      </div>
      <div className="changePasswordElementFatherDiv">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          Confirm password
        </label>
        <FormInput
          type={"password"}
          placeholder={"••••••••••••••••••••••"}
          Style={
            "text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
          }
          stateChanger={handleConfirm}
          FormRef={confirmRef}
          value={passwordValue.last}
          keyDown={handleOnKeyDown}
        />
      </div>
    </div>
  );
};

export default ChangePasswordInputs;
