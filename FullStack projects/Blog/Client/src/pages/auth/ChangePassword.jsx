import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChangePasswordInputs from "../../components/auth/ChangePasswordInputs";

const ChangePassword = () => {
  const { resetToken } = useParams();

  const navigate = useNavigate();

  const [passwordValue, setPasswordValue] = useState({
    new: "",
    confirm: "",
  });

  const handleNew = (event) => {
    event.preventDefault();
    setPasswordValue({ ...passwordValue, new: event.target.value });
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    setPasswordValue({ ...passwordValue, confirm: event.target.value });
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
    <div className="w-full grow h-full py-20 bg-[#202433] flex flex-col gap-y-5 items-center justify-center">
      <ChangePasswordInputs
        handleNew={handleNew}
        handleConfirm={handleConfirm}
        handleOnKeyDown={handleOnKeyDown}
        passwordValue={passwordValue}
      />
      <div className="w-full flex justify-center">
        <div
          className="w-[150px] lg:text-[18px] xl:text-[20px] text-center py-3 rounded-[10px] bg-[#FC728B] hover:bg-[#df4863] transition-colors cursor-pointer"
          onClick={change}
        >
          Send
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
