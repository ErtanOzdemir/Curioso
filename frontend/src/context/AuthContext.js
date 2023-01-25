import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    localStorage.getItem("user") || { userId: null, userIsAuth: false }
  );
  const navigate = useNavigate();

  const login = async (data) => {
    setUserData(data);
    navigate("/profile");
  };

  const logout = () => {
    setUserData(null);
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
