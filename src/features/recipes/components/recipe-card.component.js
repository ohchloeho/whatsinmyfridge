import React from "react";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const RecipeCard = styled(Card)`
  elevation: 5;
`;
const RecipeImage = styled(Card.Cover)`
`;
const RecipeContentArea = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px;
`;
const RecipeTitleWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const RecipeTitle = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: 16px;
  width: 90%;
`;
const RecipeInfoWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const RecipeContentText = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.primary};
`;

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
            <Feather name="thumbs-up" size={24} color="black" />
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
