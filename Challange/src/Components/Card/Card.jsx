import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const Card = ({ starNumber, comment, avatar, name, key }) => {
  const star = [
    <StarIcon className="cardStar" />,
    <StarIcon className="cardStar" />,
    <StarIcon className="cardStar" />,
    <StarIcon className="cardStar" />,
    <StarIcon className="cardStar" />,
  ];
  star.length = starNumber;

  return (
    <div className="bg-gray-200" key={key}>
      <div className="w-96 p-7 shadow-xl shadow-gray-500">
        <div className="pb-10 flex gap-2">{star}</div>
        <div className={` w-0.8 pb-12`}>{comment}</div>
        <div className="flex items-center gap-6">
          <img src={avatar} className="w-16 rounded-full" alt="" />
          <div className={`pr-6 text-lg font-medium`}>{name}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
