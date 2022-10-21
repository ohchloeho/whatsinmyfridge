import React from "react";
import { SettingsScreen } from "./screens/settings.screen";
import { FavouritesScreen } from "../favourites/screens/favourites.screen";
import { createStackNavigator } from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="settings_main" component={SettingsScreen} />
      <SettingsStack.Screen name="settings_favourites_list" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};
