import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const ChangePassword = () => {
  const { user } = useContext(Context);

  const [passValue, setPassValue] = useState("");
  const [passVerifyValue, setPassVerifyValue] = useState("");
  const [pass, setPass] = useState(true);
  const [passVerify, setPassVerify] = useState(true);
  let errorPass = true;

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <div className="sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8">
        <p className="px-2 py-1 font-ubuntu">Нууц үг</p>
        <div className="relative">
          <input
            type={pass ? "password" : "text"}
            value={passValue}
            onChange={(e) => {
              setPassValue(e.target.value);
            }}
            placeholder="write your password"
            className={`${
              errorPass ? "border-[#F0F0F0]" : "border-red-accent-400"
            } relative logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0 `}
          />
          {pass ? (
            <EyeIcon
              className="absolute w-6 fill-main right-4 top-1.5"
              onClick={() => {
                setPass(!pass);
              }}
            />
          ) : (
            <EyeSlashIcon
              className="absolute w-6 fill-main right-4 top-1.5"
              onClick={() => {
                setPass(!pass);
              }}
            />
          )}
        </div>
      </div>
      <div className="">
        <p className="px-2 py-1 font-ubuntu">Нууц үг дахин давтах</p>
        <div className="relative">
          <input
            type={passVerify ? "password" : "text"}
            value={passVerifyValue}
            onChange={(e) => {
              setPassVerifyValue(e.target.value);
            }}
            placeholder="write your password"
            className={`${
              errorPass ? "border-[#F0F0F0]" : "border-red-accent-400"
            } relative logWidth h-7 py-4 px-6 border rounded-full text-main focus:outline-0 `}
          />
          {passVerify ? (
            <EyeIcon
              className="absolute w-6 fill-main right-4 top-1.5"
              onClick={() => setPassVerify(!passVerify)}
            />
          ) : (
            <EyeSlashIcon
              className="absolute w-6 fill-main right-4 top-1.5"
              onClick={() => setPassVerify(!passVerify)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
