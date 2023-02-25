import React from "react";
import AuthChecker from "./AuthChecker";

const SignupChoices = ({
  handleGenderMale,
  handleGenderFemale,
  gender,
  check,
  setCheck,
}) => {
  return (
    <div className="flex justify-between items-center">
      <AuthChecker
        check={check}
        setCheck={setCheck}
        title={"Agree with terms and conditions"}
      />
      <div className="flex items-center gap-4">
        <div
          className={`${
            gender === "male" ? "bg-gray-600" : "bg-gray-800"
          } rounded-[10px] px-[15px] py-[10px] cursor-pointer`}
          onClick={() => {
            handleGenderMale();
          }}
        >
          <p className="text-white">Male</p>
        </div>
        <div
          className={`${
            gender === "female" ? "bg-gray-600" : "bg-gray-800"
          } rounded-[10px] px-[15px] py-[10px] cursor-pointer`}
          onClick={() => {
            handleGenderFemale();
          }}
        >
          <p className="text-white">Female</p>
        </div>
      </div>
    </div>
  );
};

export default SignupChoices;
