import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { themes } from "./src/infrastructure/themes";

import { RecipesContextProvider } from "./src/services/recipes/recipes.context";
import { InventoryContextProvider } from "./src/services/inventory/inventory.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { SettingsContextProvider } from "./src/services/settings/settings.context";
import { GroceriesContextProvider } from "./src/services/groceries/groceries.context";

import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./src/infrastructure/navigator/main.navigator";
import { AuthContextProvider } from "./src/services/authentication/auth.context";

export default function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <AuthContextProvider>
          <FavouritesContextProvider>
            <SettingsContextProvider>
              <GroceriesContextProvider>
                <RecipesContextProvider>
                  <InventoryContextProvider>
                    <NavigationContainer>
                      <MainNavigator />
                    </NavigationContainer>
                    <StatusBar style="auto" />
                  </InventoryContextProvider>
                </RecipesContextProvider>
              </GroceriesContextProvider>
            </SettingsContextProvider>
          </FavouritesContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
