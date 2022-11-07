import React from "react";

const Footer = () => {
  return (
    <div className="h-[336px] bg-[rgba(37,43,59,255)] flex flex-col items-center">
      <div className="flex gap-28">
        <div className="text-white  flex items-center text-5xl">
          Team <div className=" w-2 h-2 bg-cyan-400 mt-2"></div>
        </div>
        <div className="footerText">Facebook</div>
        <div className="footerText">Explore</div>
        <div className="footerText">Resources</div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
