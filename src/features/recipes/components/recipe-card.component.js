import React from "react";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import { Favourite } from "../../favourites/components/favourite.component";
import {
  RecipeCard,
  RecipeImage,
  RecipeTitle,
  RecipeContentArea,
  RecipeTitleWrapper,
  RecipeInfoWrapper,
  RecipeContentText,
} from "./recipe-card.styles";

export const RecipeInfoCard = ({ recipe }) => {
  return (
    <Spacer position="bottom" size="medium">
      <RecipeCard>
        <RecipeImage
          source={{
            uri: `https://spoonacular.com/recipeImages/${recipe.image}`,
          }}
        />
        <RecipeContentArea>
          <RecipeTitleWrapper>
            <RecipeTitle>{recipe.title}</RecipeTitle>
            <Favourite recipe={recipe} />
          </RecipeTitleWrapper>
          <RecipeInfoWrapper>
            <RecipeContentText>serves {recipe.servings}</RecipeContentText>
            <RecipeContentText>
              cooktime: {recipe.readyInMinutes} minutes
            </RecipeContentText>
          </RecipeInfoWrapper>
        </RecipeContentArea>
      </RecipeCard>
    </Spacer>
  );
};
