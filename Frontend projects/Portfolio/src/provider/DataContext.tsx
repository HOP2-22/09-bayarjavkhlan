import React, { SetStateAction, useState } from "react";
interface CurrentUserContextType {
  setTheme: React.Dispatch<SetStateAction<boolean>>;
  theme: boolean;
}

export const Provider = React.createContext<CurrentUserContextType | null>(
  null
);

const Context = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <Provider.Provider value={{ setTheme, theme }}>
      {children}
    </Provider.Provider>
  );
};

export default Context;
