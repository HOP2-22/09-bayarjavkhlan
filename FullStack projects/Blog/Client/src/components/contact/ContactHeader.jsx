import React from "react";

const ContactHeader = () => {
  return (
    <div>
      <p className="text-[30px] lg:text-[36px] font-medium lg:font-semibold pb-[10px]">
        Contact Us
      </p>
      <p className="text-main-text text-[13px] lg:text-[14px] pb-[30px] lg:pb-12">
        We’re here to help! Send us your query via the form below or send us an
        email at
        <span className="px-1 text-[#5FC3CA] transition">
          jawkhlan626@gmail.com
        </span>
        for any issue you’re facing
      </p>
    </div>
  );
};

export default ContactHeader;
