import React from "react";
import ThemeContext from "./ThemeContext";
import Home from "./Home";

const AppContext = () => {
  return (
    <ThemeContext>
      <Home />
    </ThemeContext>
  );
};

export default AppContext;
