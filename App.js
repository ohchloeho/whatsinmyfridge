import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { themes } from "./src/infrastructure/themes";
import { RecipesNavigator } from "./src/features/recipes/navigation/recipes-navigator";
import { InventoryNavigator } from "./src/features/inventory/navigation/inventory.navigator";
import { SettingsNavigator } from "./src/features/settings/settings.navigator";

import { RecipesContextProvider } from "./src/services/recipes/recipes.context";
import { InventoryContextProvider } from "./src/services/inventory/inventory.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { SettingsContextProvider } from "./src/services/settings/settings.context";
import { GroceriesContextProvider } from "./src/services/groceries/groceries.context";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { GroceriesScreen } from "./src/features/groceries/screens/groceries.screen";

const Tab = createBottomTabNavigator();
const focusedGreen = "#78CE50";
const unfocusedGreen = "#1D351C";

export default function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <FavouritesContextProvider>
          <SettingsContextProvider>
            <GroceriesContextProvider>
              <RecipesContextProvider>
                <InventoryContextProvider>
                  <NavigationContainer>
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
                            labelColor = focused
                              ? focusedGreen
                              : unfocusedGreen;
                          } else if (route.name === "settings") {
                            labelColor = focused
                              ? focusedGreen
                              : unfocusedGreen;
                          } else if (route.name === "inventory") {
                            labelColor = focused
                              ? focusedGreen
                              : unfocusedGreen;
                          } else if (route.name === "groceries") {
                            labelColor = focused
                              ? focusedGreen
                              : unfocusedGreen;
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

                      <Tab.Screen
                        name="settings"
                        component={SettingsNavigator}
                      />
                    </Tab.Navigator>
                  </NavigationContainer>
                  <StatusBar style="auto" />
                </InventoryContextProvider>
              </RecipesContextProvider>
            </GroceriesContextProvider>
          </SettingsContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
