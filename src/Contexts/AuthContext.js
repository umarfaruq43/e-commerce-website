import React, { createContext, useState } from "react";

export const Auth = createContext();

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  const handleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <Auth.Provider value={{ isAuth, handleAuth }}>{children}</Auth.Provider>
  );
};

export default AuthContext;
