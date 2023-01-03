import React from "react";
// import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const Context = createContext();
const ThemeContext = ({ children }) => {
  // const [allHistory, SetAllHistory] = useState([]);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    const getAllHistory = async () => {
      SetLoading(true);
      // try {
      //   const res = await instance.get("/");
      //   SetAllHistory(res.data.data);
      // } catch (error) {
      //   console.log(error);
      // }
      SetLoading(false);
    };
    getAllHistory();
  }, []);

  return (
    <Context.Provider
      value={{
        // allHistory: allHistory,
        Loading: loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
