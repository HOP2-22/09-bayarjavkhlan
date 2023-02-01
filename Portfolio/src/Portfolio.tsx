import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import AboutMe from "./components/AboutMe";
import Animation from "./components/Animation";
import Footer from "./components/Footer";
import Like from "./components/Like";
import Nav from "./components/Nav";
import Web from "./components/Web";
import Work from "./components/Work";
import DataContext, { MyContext } from "./provider/DataContext";

const Portfolio = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const { user } = useContext<any>(MyContext);

  return (
    <div
      className={`${
        theme ? "bg-main text-[#efefef]" : "bg-[#f1e7db] text-[#1a202c] "
      } flex flex-col items-center w-full bg-main pb-10 transition`}
    >
      <Nav setTheme={setTheme} theme={theme} />
      <Animation />
      <AboutMe setTheme={setTheme} theme={theme} />
      <Work setTheme={setTheme} theme={theme} />
      <Like setTheme={setTheme} theme={theme} />
      <Web setTheme={setTheme} theme={theme} />
      <Footer />
    </div>
  );
};

export default Portfolio;
