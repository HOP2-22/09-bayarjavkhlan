import React, { useContext } from "react";
import { Context } from "../../Context/RouterContext/Provider";

const Footer = () => {
  const { theme } = useContext(Context);
  return (
    <div
      className={`${
        theme ? "bg-light-blue-700" : "bg-[rgba(37,43,59,255)]"
      } h-[336px] flex flex-col items-center`}
    >
      <div className="flex gap-28">
        <div className="text-white text-5xl flex items-center">
          Team <div className="bg-cyan-400 w-2 h-2 mt-2"></div>
        </div>
        <div className="routerFooterText">Facebook</div>
        <div className="routerFooterText">Explore</div>
        <div className="routerFooterText">Resources</div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
