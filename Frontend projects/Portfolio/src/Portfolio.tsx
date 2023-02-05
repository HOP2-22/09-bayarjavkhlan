import { useContext } from "react";

import AboutMe from "./components/AboutMe";
import Animation from "./components/Animation";
import Like from "./components/Like";
import Web from "./components/Web";
import Work from "./components/Work";
import { Provider } from "./provider/DataContext";

const Portfolio = () => {
  // const { setTheme, theme } = useContext<any>(Provider);
  const themeProvider = useContext<any>(Provider);

  return (
    <>
      <Animation />
      <AboutMe
        setTheme={themeProvider?.setTheme}
        theme={themeProvider?.theme}
      />
      <Work setTheme={themeProvider?.setTheme} theme={themeProvider?.theme} />
      <Like setTheme={themeProvider?.setTheme} theme={themeProvider?.theme} />
      <Web setTheme={themeProvider?.setTheme} theme={themeProvider?.theme} />
    </>
  );
};

export default Portfolio;
