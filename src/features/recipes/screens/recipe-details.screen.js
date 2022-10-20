import React, { useEffect, useContext, useState } from "react";
import { SafeArea } from "../../../infrastructure/ui-components/safe-area.component";
import { RecipeInfoCard } from "../components/recipe-card.component";
import { RecipesContext } from "../../../services/recipes/recipes.context";
import { Loader } from "./recipe-details.styles";
import {
  CookingInstructions,
  IngredientList,
  MoreInformation,
} from "../components/recipe-details.components";

// details structure to include: list of ingredients, cooking instructions, type of meal, nutritional value, pairing

export const RecipeDetailsScreen = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { recipe } = route.params;
  const { getRecipeInformationByID, recipeDetail } = useContext(RecipesContext);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getRecipeInformationByID(recipe.id, false);
      setIsLoading(false);
    }, 1000);
  }, [recipe]);

  return (
    <SafeArea>
      <RecipeInfoCard recipe={recipe} />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <IngredientList data={recipeDetail.extendedIngredients} />
          <CookingInstructions data={recipeDetail} />
          <MoreInformation data={recipeDetail} />
        </>
      )}
    </SafeArea>
  );
};
