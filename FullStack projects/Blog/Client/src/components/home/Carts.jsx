import React from "react";

import Cart from "./Cart";

const profileImg =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676019747/Blog/Ellipse_npxje1.png";

const Carts = ({ title }) => {
  return (
    <div className="pt-[50px] sm:pt-[70px] md:pt-[100px] lg:pt-[150px] pb-3 xs:pb-5 sm:pb-[30px] md:pb-[50px] lg:pb-[80px] w-full flex flex-col gap-[90px]">
      <p className="w-full text-center text-[22px] font-semibold sm:text-[24px] sm:font-bold md:text-[26px] lg:font-extrabold lg:text-[30px] xl:font-black xl:text-[36px]">
        {title}
      </p>
      <div className="px-5 md:px-8 lg:px-20 xl:px-32 4xl:px-48 5xl:px-72 7xl:px-88 w-full overflow-x-scroll scrollBarHide flex gap-[30px]">
        {new Array(9).fill(false).map((item, index) => {
          return (
            <Cart
              key={index}
              rating={4.3}
              title={
                "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
              }
              profileImg={profileImg}
              name={"Jane Cooper"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carts;
