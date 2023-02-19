import React from "react";

import { serviceItems } from "../components/services/serviceData";
import ServiceItem from "../components/services/ServiceItem";
import ServiceHeader from "../components/services/ServiceHeader";
import ServiceButton from "../components/services/ServiceButton";

const Service = () => {
  return (
    <div className="pt-[60px] w-full h-full grow flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#bcf1f5] to-white pt-[100px] pb-10 px-5 md:px-8 lg:px-20 xl:px-32 4xl:px-48 5xl:px-72 7xl:px-88 ">
      <ServiceHeader />
      <div className="grid gap-y-10 sm:gap-y-[70px] md::gap-y-28 gap-x-10 md:gap-x-20 lg:gap-x-14 sm:grid-cols-2 lg:grid-cols-3">
        {serviceItems.map((item, index) => {
          return <ServiceItem key={index} item={item} />;
        })}
      </div>
      <ServiceButton />
    </div>
  );
};

export default Service;
