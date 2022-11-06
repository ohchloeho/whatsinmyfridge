import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../../features/authentication/screens/login.screen";
import { RegisterScreen } from "../../features/authentication/screens/register.screen";

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
