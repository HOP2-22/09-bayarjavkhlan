import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const ColorModeContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const ColorModeChange = () => {
    setTheme(!theme);
  };

  return (
    <div>
      <ColorModeContext.Provider
        value={{ theme: theme, changeTheme: ColorModeChange }}
      >
        {children}
      </ColorModeContext.Provider>
    </div>
  );
};

export default ThemeContext;
