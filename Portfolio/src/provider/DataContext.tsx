import React, { useState } from "react";
interface CurrentUserContextType {
  user: any;
}
export const MyContext = React.createContext<CurrentUserContextType | null>(
  null
);
const DataContext = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>("iserma,e");

  return <MyContext.Provider value={{ user }}>{children}</MyContext.Provider>;
};

export default DataContext;
