import React from "react";

const Card2 = ({ topic, comment2, avatar2 }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-96 overflow-hidden rounded-2xl flex flex-col items-center justify-center bg-white">
        <img src={avatar2} alt="" />
        <div className="p-8 text-gray-800 text-2xl font-medium">{topic}</div>
        <div className="px-8">{comment2}</div>
      </div>
    </div>
  );
};

export default Card2;
