import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const Provider = ({ children }) => {
  const [loading, SetLoading] = useState(false);

  const location = useLocation();
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
