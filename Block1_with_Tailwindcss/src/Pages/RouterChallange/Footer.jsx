import React from "react";

const Footer = () => {
  return (
    <div className="bg-[rgba(37,43,59,255)] h-[336px] flex flex-col items-center">
      <div className="flex gap-28">
        <div className="text-white text-5xl flex items-center">
          Team <div className="bg-cyan-400 w-2 h-2 mt-2"></div>
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
