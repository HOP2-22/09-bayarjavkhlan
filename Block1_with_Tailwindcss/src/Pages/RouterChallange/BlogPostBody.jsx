import React from "react";
import { ColorModeContext } from "./ThemeContext";
import { useContext } from "react";

const Body = ({ title, comment, avatar, name, image, date, key }) => {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return (
    <div className="max-w-[340px] h-[440px] bg-white overflow-hidden rounded-2xl flex flex-col justify-between ">
      <div
        className="h-[147px] bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="p-8 text-gray-800 text-2xl font-medium">{title}</div>
      <div className="px-8">{comment}</div>
      <div className="pl-8 p-4 flex gap-5">
        <div>
          <img src={avatar} className="w-[45px] h-[45px] rounded-full" alt="" />
        </div>
        <div className="flex items-center divide-x divide-gray-400 justify-center">
          <div className="text-sm text-gray-400 pr-2">{name}</div>
          <div className="text-sm text-gray-400 pl-2">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
