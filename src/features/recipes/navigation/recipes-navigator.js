import React from "react";
import { RecipesScreen } from "../screens/recipes.screen";
import { RecipeDetailsScreen } from "../screens/recipe-details.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const RecipesStack = createStackNavigator();

export const RecipesNavigator = () => {
  return (
    <RecipesStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS, //makes render swipe up from below
        headerShown: false,
      }}
    >
      <RecipesStack.Screen name="recipes_main" component={RecipesScreen} />
      <RecipesStack.Screen name="recipes_details" component={RecipeDetailsScreen} />
    </RecipesStack.Navigator>
  );
};
