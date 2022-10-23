import React, { useEffect, useContext, useState } from "react";
import {
  SafeArea,
  SectionAreaRow,
} from "../../../infrastructure/ui-components/safe-area.component";
import { RecipeInfoCard } from "../components/recipe-card.component";
import { RecipesContext } from "../../../services/recipes/recipes.context";
import { GroceriesContext } from "../../../services/groceries/groceries.context";
import { Loader } from "./recipe-details.styles";
import {
  CookingInstructions,
  IngredientList,
  MoreInformation,
} from "../components/recipe-details.components";
import { AppBodyH5 } from "../../../infrastructure/ui-components/app-typography.component";
import { IconButton } from "../../../infrastructure/ui-components/button.component";

// details structure to include: list of ingredients, cooking instructions, type of meal, nutritional value, pairing

export const RecipeDetailsScreen = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { recipe } = route.params;
  const { getRecipeInformationByID, recipeDetail } = useContext(RecipesContext);
  const { addToGroceries } = useContext(GroceriesContext);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getRecipeInformationByID(recipe.id, false);
      setIsLoading(false);
    }, 2500);
  }, [recipe]);

  return (
    <SafeArea>
      <RecipeInfoCard recipe={recipe} />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <SectionAreaRow full>
            <IconButton
              iconName="web"
              label="search"
              size={170}
              onPress={() => {
                // navigate user to browser and api webpage
              }}
            />
            <IconButton
              iconName="cart-arrow-down"
              label="add to groceries"
              size={170}
              onPress={() => {
                addToGroceries(recipeDetail.extendedIngredients)
              }}
            />
          </SectionAreaRow>
          <IngredientList data={recipeDetail.extendedIngredients} />
          <CookingInstructions data={recipeDetail} />
          <MoreInformation data={recipeDetail} />
        </>
      )}
    </SafeArea>
  );
};
