import React from "react";

const ServiceItem = ({ item }) => {
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#5FC3CA]">
        {item.icon}
      </div>
      <p className="">{item.title}</p>
      <p className="text-center w-11/12 xs:w-[65%] xl:w-11/12 2xl:w-5/6 4xl:w-3/4 5xl:w-4/5 7xl:w-3/4">
        {item.text}
      </p>
    </div>
  );
};

export default ServiceItem;
