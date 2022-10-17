import React from "react";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
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
            <TouchableOpacity>
              <Feather name="thumbs-up" size={20} />
            </TouchableOpacity>
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
