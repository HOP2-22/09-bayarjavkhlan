import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const { resetToken } = useParams();

  const navigate = useNavigate();

  const [passwordValue, setPasswordValue] = useState({
    new: "",
    confirm: "",
  });

  const [newType, setNewType] = useState(true);
  const [confirmType, setConfirmType] = useState(true);

  const handleNew = (event) => {
    event.preventDefault();
    setPasswordValue({ ...passwordValue, first: event.target.value });
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    setPasswordValue({ ...passwordValue, last: event.target.value });
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (passwordValue.new === passwordValue.confirm) {
        change();
      }
    }
  };

  const change = async () => {
    try {
      console.log(passwordValue.new);
      console.log(resetToken);
      const response = await axios.post(
        "http://localhost:8000/user/auth/updatePassword",
        {
          password: passwordValue.new,
          resetToken,
        }
      );

      alert(response.data.message);
      navigate("/register/login");
    } catch (error) {
      console.log(error);
      alert(error.response.data.error.message);
    }
  };

  return (
    <div className="bg-[#202433] w-full grow h-full flex flex-col gap-y-10 items-center justify-center">
      <div className="flex flex-col gap-[10px]">
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
      <div className="flex flex-col gap-[10px]">
        <label className="text-white lg:text-[18px] xl:text-[20px]">
          Confirm password
        </label>
        <div className="relative">
          <input
            type={confirmType ? "password" : "text"}
            placeholder="••••••••••••••••••••••"
            className="text-white w-full py-4 rounded-[10px] bg-[#33394F] focus:outline-none pl-5 md:pl-7 lg:pl-10"
            onChange={handleConfirm}
            value={passwordValue.last}
            onKeyDown={handleOnKeyDown}
          />
          <div className="absolute mr-2 lg:mr-5 w-10 h-10 flex items-center justify-center cursor-pointer right-0 top-2">
            <AiFillEye
              className={`${
                confirmType ? "block" : "hidden"
              } text-[30px] text-white`}
              onClick={() => {
                setConfirmType(false);
              }}
            />
            <AiFillEyeInvisible
              className={`${
                confirmType ? "hidden" : "block"
              } text-[30px] text-white`}
              onClick={() => {
                setConfirmType(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
