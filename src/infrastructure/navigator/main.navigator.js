import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AuthNavigator } from "./auth.navigator";
import { AuthContext } from "../../services/authentication/auth.context";

export const MainNavigator = () => {
  const { user } = useContext(AuthContext);

  return user ? <AppNavigator /> : <AuthNavigator />;
};
