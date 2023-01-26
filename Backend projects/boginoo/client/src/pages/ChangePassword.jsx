import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

import Logo from "../img/boginoo3.png";
import { FaSpinner } from "react-icons/fa";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const ChangePassword = () => {
  const navigate = useNavigate();

  const { loading, setLoading, forgetEmailValue } = useContext(Context);

  const [pass, setPass] = useState(true);
  const [passVerify, setPassVerify] = useState(true);

  const [changePassValue, setChangePassValue] = useState("");
  const [changePassVerifyValue, setChangePassVerifyValue] = useState("");

  const changePass = async () => {
    setLoading(true);
    try {
      const changedPass = await axios.put(
        `http://localhost:8000/user/changePass`,
        {
          email: forgetEmailValue,
          password: changePassValue,
        }
      );
      navigate("/login");
      setLoading(false);
      setTimeout(() => {
        alert(changedPass.data.message);
      }, [500]);
    } catch (error) {
      setLoading(false);
      setTimeout(() => {
        alert(error.response.data.error.message);
      }, [500]);
    }
  };

  return (
    <>
      <button
        disabled
        className={`${
          loading ? "flex" : "hidden"
        } justify-center items-center bg-green-600 py-4 px-6 my-10 rounded-lg`}
      >
        <FaSpinner className=" h-7 w-7 mr-3 animate-spin" color="white" />
        <p className="font-semibold pt-2 text-white"> Loading</p>
      </button>
      <div
        className={`${loading ? "hidden" : "flex"} flex flex-col items-center`}
      >
        <img src={Logo} alt="" className="logInLogo" />
        <div className="font-extrabold text-main text-[20px]">
          Нууц үг сэргээх
        </div>
        <p className="text-center pt-8 pb-6 sm:pt-4 lg:pt-6">
          шинэ нууц үг ээ бичнэ үү{" "}
        </p>
        <div className="pb-2 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8">
          <p className="px-2 py-1 font-ubuntu">Нууц үг</p>
          <div className="relative">
            <input
              type={pass ? "password" : "text"}
              value={changePassValue}
              onChange={(e) => {
                setChangePassValue(e.target.value);
              }}
              placeholder="write your password"
              className="border-[#F0F0F0] relative logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0"
            />
            {pass ? (
              <EyeIcon
                className="passEyeIcon"
                onClick={() => {
                  setPass(!pass);
                }}
              />
            ) : (
              <EyeSlashIcon
                className="passEyeIcon"
                onClick={() => {
                  setPass(!pass);
                }}
              />
            )}
          </div>
        </div>
        <div className="pb-5">
          <p className="px-2 py-1 font-ubuntu">Нууц үг дахин давтах</p>
          <div className="relative">
            <input
              type={passVerify ? "password" : "text"}
              value={changePassVerifyValue}
              onChange={(e) => {
                setChangePassVerifyValue(e.target.value);
              }}
              placeholder="write your password"
              className="border-[#F0F0F0] relative logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0"
            />
            {passVerify ? (
              <EyeIcon
                className="passEyeIcon"
                onClick={() => setPassVerify(!passVerify)}
              />
            ) : (
              <EyeSlashIcon
                className="passEyeIcon"
                onClick={() => setPassVerify(!passVerify)}
              />
            )}
          </div>
        </div>
        <div
          className="button"
          onClick={() => {
            if (changePassValue === changePassVerifyValue) {
              changePass();
            } else {
              alert("пасс аа адилхан бичнэ үү");
            }
          }}
        >
          Солих
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
