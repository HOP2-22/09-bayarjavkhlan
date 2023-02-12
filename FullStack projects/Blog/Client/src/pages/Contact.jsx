import React from "react";

import LeftSide from "../components/contact/LeftSide";
import RightSide from "../components/contact/RightSide";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 md:min-h-[65vh] lg:min-h-[75vh] xl:min-h-[72vh] 2xl:min-h-[80vh] 7xl:min-h-[85vh]">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Contact;
