import React from "react";
// import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const Context = createContext();

const ThemeContext = ({ children }) => {
  // const [allHistory, SetAllHistory] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [cut, setCut] = useState(false);

  const [stringId, setStringId] = useState("");
  const [characters, setCharacters] = useState(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  );

  const makeId = () => {
    setStringId("");
    for (let i = 0; i < 6; i++) {
      setStringId(stringId + characters.charAt(Math.floor(Math.random() * 62)));
    }
  };

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
        makeId: makeId,
        stringId: stringId,
        cut: cut,
        setCut: setCut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
