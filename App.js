import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { themes } from "./src/infrastructure/themes";
import { RecipesScreen } from "./src/features/recipes/screens/recipes.screen";
import { InventoryNavigator } from "./src/features/inventory/navigation/inventory.navigator";
import { RecipesContextProvider } from "./src/services/recipes/recipes.context";
import { InventoryContextProvider } from "./src/services/inventory/inventory.context";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeArea } from "./src/infrastructure/ui-components/safe-area.component";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
};
const focusedGreen = "#78CE50";
const unfocusedGreen = "#1D351C";

export default function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
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
                  options={{ headerShown: false }}
                  name="recipes"
                  component={RecipesScreen}
                />
                <Tab.Screen name="settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
          </InventoryContextProvider>
        </RecipesContextProvider>
      </ThemeProvider>
    </>
  );
}
