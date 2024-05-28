import React, { createContext, useContext, useState } from 'react';
import { postAuth, userSignup } from './API';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  let userInfo = localStorage.getItem('userInfo');
  const [user, setUser] = useState(userInfo || null);

  const login = (userData) => {
    // console.log('USERDATA', userData);
    const res = postAuth(userData)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userInfo', res.data.userDetails);
        setUser(res.data.userDetails);
        return res.data;
      })
      .catch((err) => {
        // console.log(err);
        return err.response.data;
      });
    setUser(userData);
    return res;
  };
  const signup = (userData) => {
    const rest = userSignup(userData).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userInfo', res.data.userDetails);
      setUser(res.data.userDetails);
      return res.data;
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
