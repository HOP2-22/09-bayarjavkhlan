import React from "react";

import { StarIcon } from "@heroicons/react/24/solid";

const Cart = ({ rating, title, name, profileImg }) => {
  return (
    <div className="pb-20">
      <div className="bg-white drop-shadow-2xl w-[320px] p-[33px] flex flex-col gap-[50px]">
        <div className="flex flex-col gap-5">
          <div className="flex gap-[6px]">
            {new Array(5).fill(false).map((item, index) => {
              return (
                <StarIcon
                  key={index}
                  className={`${
                    index < Math.floor(rating)
                      ? "fill-[#FFBB00]"
                      : " fill-gray-400"
                  } w-4`}
                />
              );
            })}
          </div>
          <p className="leading-[29px]">{title}</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={profileImg}
            className="rounded-full w-14"
            alt=""
            draggable="false"
          />
          <p className="text-[18px] font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
