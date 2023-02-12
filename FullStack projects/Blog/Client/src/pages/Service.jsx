import React from "react";
import { Link } from "react-router-dom";

import { serviceItems } from "../components/services/serviceData";
import ServiceItem from "../components/services/ServiceItem";

const Service = () => {
  return (
    <div className="pt-[100px] pb-10 px-5 md:px-8 lg:px-20 xl:px-32 4xl:px-48 5xl:px-72 7xl:px-88 w-full ">
      <p className="pb-3 w-full text-center font-bold text-[30px] sm:text-[36px] md:text-[40px]">
        Our Services
      </p>
      <div className="w-full flex justify-center">
        <p className="pb-14 text-zinc-400 w-5/6 md:w-full text-center">
          Consectetur adipiscing elit nnuliam munc sagittis suscipit ultrices
        </p>
      </div>
      <div className="grid gap-y-10 sm:gap-y-[70px] md::gap-y-28 gap-x-10 md:gap-x-20 lg:gap-x-14 sm:grid-cols-2 lg:grid-cols-3">
        {serviceItems.map((item, index) => {
          return <ServiceItem index={index} item={item} />;
        })}
      </div>
      <Link to={"/products"} className="w-full flex justify-center py-10">
        <button className="px-10 py-[10px] rounded-[10px] bg-[#5FC3CA] hover:bg-[#3cadb5] transition-colors text-white">
          Learn more
        </button>
      </Link>
    </div>
  );
};

export default Service;
