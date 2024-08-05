import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const nav = useNavigate();
  const [shouldRefetch, _refetch] = useState(true);
  const [user, setUser] = useState(null);

  const refetch = () => _refetch((prev) => !prev);

  const logout = async () => {
    await axios.get("/api/userlogout");
    setUser(null);
    nav("/");
  };

  const colors = {
    Sea: "#a2ccb6",
    Sand: "#fceeb5",
    Peach: "#ee786e",
  };
  useEffect(() => {
    axios
      .get("/api/secure")
      .then((res) => {
        // console.log("Server Response:", res); // Response
        setUser(res.data);
      })
      .catch((e) => {
        console.error("Error fetching user:", e);
        setUser(null);
      });
  }, [shouldRefetch]);

  return (
    <UserContext.Provider
      value={{ setUser, user, isLoggedIn: !!user, refetch, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
