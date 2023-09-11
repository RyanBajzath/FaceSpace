import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setStatus("idle");
      })
      .catch((err) => {
        setError(true);
        console.log("Error: ", err);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{ data, status, error, currentUser, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
