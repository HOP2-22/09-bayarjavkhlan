import React, { useState } from "react";
import Logo from "../img/Logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [object, setObject] = useState([
    "About",
    "Skills",
    "Portfolio",
    "Testimonial",
  ]);

  const navigate = useNavigate();

  return (
    <div className="pt-12 pb-[70px] px-40 h-14 flex justify-between items-center">
      <img src={Logo} alt="" className="w-[174px]" />
      <div className="flex gap-10">
        {object?.map((el, index) => {
          return (
            <div
              className="text-[16px] font-medium"
              key={index}
              onClick={() => {
                navigate(`/${el}`);
              }}
            >
              {el}
            </div>
          );
        })}
      </div>
      <div className="text-[16px] font-medium px-6 py-4 border-2 rounded-2xl border-main">
        CV Download
      </div>
    </div>
  );
};

export default Nav;
