import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [isAuthenticated, setisAuthenticated] = useState(
    localStorage.getItem("token")
  );

  const login = async (email, password) => {
    try {
      const response = await axios.post(`http://localhost:3000/school/login`, {
        email,
        password,
      });
      console.log(response.data);
      setRole(response.data.role);
      setisAuthenticated(true);
      setUser(response.data.data);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("token", response.data.Token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("teacherID", response.data.ID);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const value = {
    login,
    Logout,
    user,
    role,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
