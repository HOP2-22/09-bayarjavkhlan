import React from "react";
import { ColorModeContext } from "./ThemeContext";
import { useContext } from "react";

const DataBody = ({ title, comment, avatar, image, name, date }) => {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return (
    <div
      className={`max-w-[370px] max-h-[440px] overflow-hidden rounded-2xl flex flex-col items-center ${
        theme ? "bg-white" : "bg-black"
      }`}
    >
      <div
        className="h-[147px] bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          width: "100%",
        }}
      ></div>
      <div className="p-8 text-gray-800 text-2xl font-medium">{title}</div>
      <div className="px-8">{comment}</div>
    </div>
  );
};

export default DataBody;
