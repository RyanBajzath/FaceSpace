import { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessionUser, setSessionUser] = useState("");

  useEffect(() => {
    setSessionUser(sessionStorage.getItem("user"));
  }, []);

  return (
    <UserContext.Provider value={{ sessionUser }}>
      {children}
    </UserContext.Provider>
  );
};
