import React from "react";
import ThemeContext from "../../Pages/RouterChallange/ThemeContext";
import Home from "./Home";

const AppContext = () => {
  return (
    <ThemeContext>
      <Home />
    </ThemeContext>
  );
};

export default AppContext;
