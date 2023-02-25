import React from "react";

const AuthButton = ({ stateChanger, title }) => {
  return (
    <div
      onClick={stateChanger}
      className="w-full lg:text-[18px] xl:text-[20px] text-center py-4 rounded-[10px] bg-[#FC728B] hover:bg-[#df4863] transition-colors cursor-pointer "
    >
      {title}
    </div>
  );
};

export default AuthButton;
