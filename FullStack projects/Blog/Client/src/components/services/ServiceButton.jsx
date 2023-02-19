import React from "react";
import { Link } from "react-router-dom";

const ServiceButton = () => {
  return (
    <Link to={"/"} className="w-full flex justify-center py-10">
      <button className="px-10 py-[10px] rounded-[10px] bg-[#5FC3CA] hover:bg-[#3cadb5] transition-colors text-white">
        Learn more
      </button>
    </Link>
  );
};

export default ServiceButton;
