import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./auth.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const LoginRequest = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const RegisterRequest = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user);
        console.log("account created successfully, please return to login");
      })
      .catch((error) => {
        console.log("this is error:" + error);
      });
  };

  const CheckAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("user is signed in");
      } else {
        console.log("user is not signed in");
      }
    });
  };
  CheckAuthState();

  const LogOutRequest = () => {
    signOut(auth)
      .then(() => {
        console.log("user is signed out");
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login: LoginRequest,
        register: RegisterRequest,
        logOut: LogOutRequest,
        checkAuth: CheckAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
