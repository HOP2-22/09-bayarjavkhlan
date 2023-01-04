import React from "react";
import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const Context = createContext();

const ThemeContext = ({ children }) => {
  // const [allHistory, SetAllHistory] = useState([]);
  const [loading, SetLoading] = useState(false);

  const [cut, setCut] = useState(false);
  const [stringId, setStringId] = useState("");
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const makeId = () => {
    setStringId("");
    let newId = "";
    for (let i = 0; i < 6; i++) {
      newId += characters.charAt(Math.floor(Math.random() * 62));
    }
    setStringId(newId);
  };

  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState(true);
  const [user, setUser] = useState();
  const updateUserPassword = async () => {
    try {
      SetLoading(true);
      let newUser;
      newUser = await axios.get(`http://localhost:8000/${emailValue}`);
      console.log(newUser.data.data);
      setUser(newUser);
      SetLoading(false);
    } catch (error) {
      setError(false);
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

        updateUserPassword: updateUserPassword,
        error: error,
        emailValue: emailValue,
        setEmailValue: setEmailValue,

        user: user,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
