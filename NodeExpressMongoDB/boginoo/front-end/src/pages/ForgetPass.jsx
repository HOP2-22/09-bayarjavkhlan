import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import Logo from "../img/boginoo1.png";

const ForgetPass = () => {
  const { error, emailValue, setEmailValue, updateUserPassword } =
    useContext(Context);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/changePassword");
  }

  return (
    <div className="flex flex-col items-center">
      <img src={Logo} alt="" className="logInLogo" />
      <div className="font-extrabold text-main text-[20px]">
        Нууц үг сэргээх
      </div>

      <p className={`${error ? "hidden" : "text-red-accent-400"}`}>
        Зөв цахим хаягаа оруулна уу
      </p>
      <div className="logInEmail">
        <p className="px-2 py-1">Цахим хаяг</p>
        <input
          type="text"
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          placeholder="write your email address"
          className={`${
            error ? "border-[#F0F0F0]" : "border-red-accent-400"
          } logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0`}
        />
      </div>
      <div
        className="bg-main rounded-[100px] px-[45px] py-2 font-bold text-white text-[20px] cursor-pointer"
        onClick={() => {
          updateUserPassword();
          handleClick();
        }}
      >
        Илгээх
      </div>
    </div>
  );
};

export default ForgetPass;
