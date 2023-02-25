import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";
// import axios from "axios";
// import Cookie from "js-cookie";

export const Context = createContext();

const Provider = ({ children }) => {
  const [loading, SetLoading] = useState(false);

  const location = useLocation();
  const [user, setUser] = useState(null);

  const [path, setpath] = useState(window.location.pathname);

  const [verify, setVerify] = useState(false);
  const [verifyValue, setVerifyValue] = useState("");

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [resetToken, setResetToken] = useState("");

  useEffect(() => {
    handleToTop();
    setpath(location.pathname);
    setVerify(false);
  }, [location]);

  // const instance = axios.create();

  // instance.interceptors.request.use((req) => {
  //   const token = Cookie.get("token");
  //   if (token) {
  //     return req.headers.set("token", token);
  //   }
  // });

  // useEffect(() => {
  //   const getUser = async () => {
  //     const response = await axios.get("http://localhost:8000/user/");

  //     setUser(response.user);
  //   };
  //   getUser();
  // }, []);

  return (
    <Context.Provider
      value={{
        path,
        loading,
        SetLoading,
        verify,
        setVerify,
        verifyValue,
        setVerifyValue,
        handleToTop,
        user,
        setUser,

        //TOKEN
        resetToken,
        setResetToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
