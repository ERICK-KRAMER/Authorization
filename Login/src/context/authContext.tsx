import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [] = useState();

  return (
    <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
  )
}

export { useAuth, AuthContextProvider };
