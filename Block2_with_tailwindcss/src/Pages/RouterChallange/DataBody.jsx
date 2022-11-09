import React from "react";

const DataBody = ({ title, comment, avatar, image, name, date }) => {
  return (
    <div className="max-w-[370px] max-h-[440px] overflow-hidden rounded-2xl flex flex-col items-center bg-white">
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
