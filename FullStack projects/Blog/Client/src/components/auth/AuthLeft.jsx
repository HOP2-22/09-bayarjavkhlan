import React from "react";

const bgImage =
  "https://res.cloudinary.com/dalheltnm/image/upload/v1676230956/Blog/Screenshot_2023-02-12_at_19.20.54_trw06f.png";

const AuthLeft = () => {
  return (
    <div className="hidden md:flex w-full p-2 h-full">
      <img
        src={bgImage}
        alt=""
        className="w-full h-full rounded-[10px] object-cover"
      />
    </div>
  );
};

export default AuthLeft;
