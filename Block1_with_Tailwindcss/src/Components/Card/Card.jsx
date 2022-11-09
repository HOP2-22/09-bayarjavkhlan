import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const Card1 = ({ starNumber, comment, avatar, name }) => {
  const star = [
    <StarIcon className="star" />,
    <StarIcon className="star" />,
    <StarIcon className="star" />,
    <StarIcon className="star" />,
    <StarIcon className="star" />,
  ];
  star.length = starNumber;
  return (
    <div className=" bg-gray-200">
      <div className="shadow-xl shadow-gray-500 border-gray-600 p-7 w-96  ">
        <div className="flex gap-2 pb-10">{star}</div>
        <div className="pb-12 w-0.8">{comment}</div>
        <div className="flex gap-6 items-center ">
          <img src={avatar} className="w-16 rounded-full" alt="" />
          <div className="text-black font-medium text-lg pr-6">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
