import React, { createContext } from "react";
import axios from "axios";

export const Context = createContext();

const ThemeContext = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default ThemeContext;
