import React from "react";

import LeftSide from "../components/contact/LeftSide";
import RightSide from "../components/contact/RightSide";

const Contact = () => {
  return (
    <div className="pt-[60px] w-full h-full grow grid grid-cols-1 md:grid-cols-5">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Contact;
