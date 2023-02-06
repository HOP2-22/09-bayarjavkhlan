import { useContext } from "react";

import AboutMe from "./components/AboutMe";
import Animation from "./components/Animation";
import Web from "./components/Web";
import Main from "./components/Main";
import { Provider } from "./provider/DataContext";

const Portfolio = () => {
  const { setTheme, theme } = useContext<any>(Provider);

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
