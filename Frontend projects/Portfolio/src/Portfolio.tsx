import { useContext } from "react";

import AboutMe from "./components/AboutMe";
import Animation from "./components/Animation";
import Web from "./components/Web";
import Main from "./components/Main";
import { Provider } from "./provider/DataContext";

const Portfolio = () => {
  return (
    <>
      <Animation />
      <AboutMe />
      <Main />
      <Web />
    </>
  );
};

export default Portfolio;
