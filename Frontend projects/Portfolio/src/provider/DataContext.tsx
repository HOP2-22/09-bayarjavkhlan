import React, { SetStateAction, useEffect, useState } from "react";
interface CurrentUserContextType {
  setTheme: React.Dispatch<SetStateAction<boolean>>;
  theme: boolean;
  transition: boolean;
}

export const Provider = React.createContext<CurrentUserContextType | null>(
  null
);

const Context = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(false);

  useEffect(() => {
    setTransition(true);
  }, []);

  return (
    <Provider.Provider value={{ setTheme, theme, transition }}>
      {children}
    </Provider.Provider>
  );
};

export default Context;
