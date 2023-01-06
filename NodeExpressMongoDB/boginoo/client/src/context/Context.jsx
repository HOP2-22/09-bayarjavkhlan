import React from "react";
import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const Context = createContext();

const ThemeContext = ({ children }) => {
  const [allHistory, SetAllHistory] = useState([]);
  const [loading, SetLoading] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const getAllHistory = async () => {
      SetLoading(true);
      try {
        const res = await axios.get("http://localhost:8000/home/:id");
        SetAllHistory(res.data.data);
      } catch (error) {
        console.log(error);
      }
      SetLoading(false);
    };
    getAllHistory();
  }, []);

  const updateUserPassword = async () => {
    try {
      SetLoading(true);
      let newUser;
      newUser = await axios.get(`http://localhost:8000/${emailValue}`);
      console.log(newUser.data.data);
      setUser(newUser);
      SetLoading(false);
    } catch (error) {
      console.log(error);
      setError(false);
    }
  };

  return (
    <Context.Provider
      value={{
        // allHistory: allHistory,
        Loading: loading,

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
