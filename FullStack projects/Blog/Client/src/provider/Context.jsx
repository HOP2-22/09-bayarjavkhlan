import React from "react";
import { useState, createContext } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [loading, SetLoading] = useState(false);

  return (
    <Context.Provider
      value={{
        loading,
        SetLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
