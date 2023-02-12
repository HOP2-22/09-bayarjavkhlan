import React from "react";

const img =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676187016/Blog/09435730db48f21367bf3841cd8bca3a_pgxjdd.png";

const RightSide = () => {
  return (
    <div className="pt-[60px] hidden md:flex h-full items-center justify-center bg-gradient-to-br from-[#5FC3CA] to-[#94dde2] md:col-span-2">
      <img src={img} alt="" draggable="false" className="pt-14" />
    </div>
  );
};

export default RightSide;
