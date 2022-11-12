import React from "react";
import { Link } from "react-router-dom";

const Body = ({
  firstName,
  lastName,
  erPicture,
  date,
  type,
  text,
  likes,
  petImage,
  ind,
}) => {
  return (
    <div
      className="max-w-[340px] h-[650px] bg-white rounded-2xl flex flex-col gap-4 overflow-hidden"
      key={ind}
    >
      <Link to={firstName}>
        <div
          className="h-[350px] w-full bg-cover"
          style={{
            backgroundImage: `url(${petImage})`,
          }}
        ></div>
      </Link>
      <img src={erPicture} alt="" />
      <div className="px-8 text-xl">{text}</div>
      <div className="px-8">
        <span className="pr-2 text-blue-700 text-lg">likes:</span>
        <span className="text-sky-300">{likes}</span>
      </div>
      <div className="px-8 font-medium">pet:{type[2]}</div>
      <div className="pl-8 flex flex-col gap-1 font-medium">
        <div className="">LastName: {lastName}</div>
        <div className="">firstName:{firstName}</div>
        <div className="py-3 text-red-500">posted :{date.slice(0, 10)}</div>
      </div>
    </div>
  );
};

export default Body;
