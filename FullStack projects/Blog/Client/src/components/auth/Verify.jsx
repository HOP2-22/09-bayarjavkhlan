import React, { useContext, useEffect, useRef, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { Context } from "../../provider/Context";

const Verify = ({ email, register, handleEmpty, sendVerifyCode }) => {
  const { verify, setVerify, verifyValue, setVerifyValue } =
    useContext(Context);

  const inputRef = useRef();

  const handleBack = () => {
    handleEmpty();
    setVerifyValue("");
    setVerify(false);
    setTimer(false);
    setText(false);
    setSecond(60);
  };

  const [timer, setTimer] = useState(false);
  const [text, setText] = useState(false);
  const [second, setSecond] = useState(60);

  // const [timer, setTimer] = useState({
  //   second: 60,
  //   boolean: false,
  // });

  useEffect(() => {
    if (second === 0) {
      setTimer(false);
      setText(false);
    }
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setSecond((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, second]);

  const handleChange = (event) => {
    const newValue = event.target.value;

    if (newValue.length <= 5) {
      setVerifyValue(newValue);
    }
  };

  return (
    <>
      <div
        className={`${
          verify ? "flex" : "hidden"
        } h-full w-full flex-col items-center justify-center bg-[#202433]`}
      >
        <div className="w-4/5 xs:w-3/4 sm:w-3/5 md:w-4/5 lg:w-[400px] flex flex-col items-center gap-2">
          <div className="w-full pt-10 pb-5">
            <div
              className="w-8 h-8 rounded-full border-2 border-white hover:bg-white hover:text-[#202433] text-white transition-colors cursor-pointer text-[20px] font-bold flex items-center justify-center leading-3"
              onClick={handleBack}
            >
              <IoIosArrowBack className="text-[20px] -translate-x-[1px] font-bold" />
            </div>
          </div>
          <div className="flex flex-col gap-4 pb-10 items-center">
            <p className="text-[30px] font-bold text-center text-white/80">
              Verify your email address
            </p>
            <p className="text-center text-white/90">
              Please enter the verification code we sent to your email address
              <span className="px-2">{email}</span>
            </p>
            <p className="text-red-500 font-medium text-[18px] text-center">
              {text && `please wait ${second} to resent verify code`}
            </p>
          </div>
          <div
            className="w-full justify-between flex gap-3"
            onClick={() => {
              inputRef.current.focus();
            }}
          >
            {new Array(5).fill(0).map((_, index) => (
              <div
                className="flex w-14 h-20 border-b-4 bg-[#171d31] rounded-[5px] justify-center items-center text-5xl text-gray-100/80"
                key={index}
              >
                {verifyValue[index]}
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-3 items-start my-6">
            <div
              className="col-span-1 w-full text-start text-white cursor-pointer hover:text-gray-200 transition"
              onClick={() => {
                if (timer) {
                  setText(true);
                } else {
                  sendVerifyCode();
                }
                setTimer(true);
              }}
            >
              Re-send {timer ? second : ""}
            </div>
            <div className="col-span-1 w-full flex justify-center">
              <div
                className="text-center px-6 py-2 rounded-[10px] bg-[#FC728B] hover:bg-[#df4863] transition-colors cursor-pointer"
                onClick={register}
              >
                Verify
              </div>
            </div>
          </div>
        </div>
        <input
          type="text"
          ref={inputRef}
          value={verifyValue}
          className="w-[1px] h-[1px] focus:outline-none"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Verify;
