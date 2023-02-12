import React, { useState, useEffect, useContext } from "react";

import { Context } from "../../../provider/Context";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);
  const { path } = useContext(Context);

  const [offset, setOffset] = useState(window.pageYOffset);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    width > 767 && setHamburger(false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="w-full fixed z-20 flex flex-col">
      <DesktopNavbar
        path={path}
        offset={offset}
        hamburger={hamburger}
        setHamburger={setHamburger}
      />
      <MobileNavbar setHamburger={setHamburger} hamburger={hamburger} />
    </div>
  );
};

export default NavBar;
