import React, { useState } from "react";

import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Animation from "./components/Animation";

const Portfolio = () => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <div
      className={`${
        theme ? "bg-main text-[#efefef]" : "bg-[#f1e7db] text-[#1a202c] "
      } flex flex-col items-center w-full bg-main pb-10`}
    >
      <Nav setTheme={setTheme} theme={theme} />
      <Animation />
      <AboutMe setTheme={setTheme} theme={theme} />
    </div>
  );
};

export default Portfolio;
