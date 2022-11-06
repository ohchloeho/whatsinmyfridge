import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";

import { GroceriesScreen } from "../../features/groceries/screens/groceries.screen";
import { RecipesNavigator } from "../../features/recipes/navigation/recipes-navigator";
import { InventoryNavigator } from "../../features/inventory/navigation/inventory.navigator";
import { SettingsNavigator } from "../../features/settings/settings.navigator";

const Tab = createBottomTabNavigator();
const focusedGreen = "#78CE50";
const unfocusedGreen = "#1D351C";

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 80, paddingTop: 10 },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor;
          if (route.name === "recipes") {
            iconName = "food-turkey";
            iconColor = focused ? focusedGreen : unfocusedGreen;
          } else if (route.name === "settings") {
            iconName = "account-cog";
            iconColor = focused ? focusedGreen : unfocusedGreen;
          } else if (route.name === "inventory") {
            iconName = focused ? "fridge" : "fridge-outline";
            iconColor = focused ? focusedGreen : unfocusedGreen;
          } else if (route.name === "groceries") {
            iconName = focused ? "cart" : "cart-outline";
            iconColor = focused ? focusedGreen : unfocusedGreen;
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={25}
              color={iconColor}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          let labelColor;
          if (route.name === "recipes") {
            labelColor = focused ? focusedGreen : unfocusedGreen;
          } else if (route.name === "settings") {
            labelColor = focused ? focusedGreen : unfocusedGreen;
          } else if (route.name === "inventory") {
            labelColor = focused ? focusedGreen : unfocusedGreen;
          } else if (route.name === "groceries") {
            labelColor = focused ? focusedGreen : unfocusedGreen;
          }
          return (
            <Text
              style={{
                color: labelColor,
                fontFamily: "Futura",
                fontSize: 12,
              }}
            >
              {route.name}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="inventory"
        component={InventoryNavigator}
      />
      <Tab.Screen
        name="groceries"
        component={GroceriesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="recipes"
        component={RecipesNavigator}
      />

      <Tab.Screen name="settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
};
