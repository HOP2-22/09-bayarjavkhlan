import React from "react";

const Header = () => {
  return (
    <div className="relative w-full max-h-screen">
      <div className="absolute -z-10 top-0 left-0 w-full">
        <img
          src={
            "https://res.cloudinary.com/dalheltnm/image/upload/v1676019492/Blog/brooke-cagle-cb4Dv50LN1Y-unsplash_1_ssh1ve.jpg"
          }
          alt=""
          className={`1w-full max-h-screen object-cover`}
        />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Header;
