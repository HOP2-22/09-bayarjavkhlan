import React from "react";
import { ColorModeContext } from "./ThemeContext";
import { useContext } from "react";

const Body = ({ title, comment, avatar, name, image, date, key }) => {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return (
    <div className="max-w-[340px] h-[440px] bg-white rounded-2xl flex flex-col justify-between overflow-hidden">
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
        <div className="flex items-center justify-center divide-x divide-gray-400">
          <div className="pr-2 text-sm text-gray-400">{name}</div>
          <div className="pl-2 text-sm text-gray-400">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
