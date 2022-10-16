import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { themes } from "./src/infrastructure/themes";
import { RecipesScreen } from "./src/features/recipes/screens/recipes.screen";
import { RecipesContextProvider } from "./src/services/recipes/recipes.context";

export default function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <RecipesContextProvider>
          <RecipesScreen />
          <StatusBar style="auto" />
        </RecipesContextProvider>
      </ThemeProvider>
    </>
  );
}
