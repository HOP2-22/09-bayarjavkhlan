import React from "react";

const PetInfo = ({ el }) => {
  console.log(el);
  return <div className="mt-20">asjda {el.likes}</div>;
};

export default PetInfo;
