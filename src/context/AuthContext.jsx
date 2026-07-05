import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    return localStorage.getItem("currentUser") || null;
  });

  const login = (username) => {

    localStorage.setItem("currentUser", username);

    setUser(username);

  };

  const logout = () => {

    localStorage.removeItem("currentUser");

    setUser(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export const useAuth = () => useContext(AuthContext);