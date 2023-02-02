import { useContext } from "react";

import AboutMe from "./components/AboutMe";
import Animation from "./components/Animation";
import Like from "./components/Like";
import Web from "./components/Web";
import Work from "./components/Work";
import { Provider } from "./provider/DataContext";

const Portfolio = () => {
  const { setTheme, theme } = useContext<any>(Provider);

  return (
    <>
      <Animation />
      <AboutMe setTheme={setTheme} theme={theme} />
      <Work setTheme={setTheme} theme={theme} />
      <Like setTheme={setTheme} theme={theme} />
      <Web setTheme={setTheme} theme={theme} />
    </>
  );
};

export default Portfolio;
