import React from "react";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e136b8af6961b47361447" },
});

export const ColorModeContext = createContext();
const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const ColorModeChange = () => {
    setTheme(!theme);
  };

  const [Data, SetData] = useState([]);
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      SetLoading(true);
      try {
        const res = await instance.get("/");
        SetData(res.data.data);
      } catch (error) {
        console.log(error);
      }
      SetLoading(false);
    };
    getData();
  }, []);

  return (
    <ColorModeContext.Provider
      value={{
        theme: theme,
        changeTheme: ColorModeChange,
        Data: Data,
        Loading: Loading,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export default ThemeContext;
