import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RecipeCard = styled(Card)`
  elevation: 5;
`;
export const RecipeImage = styled(Card.Cover)``;
export const RecipeContentArea = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px;
`;
export const RecipeTitleWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const RecipeTitle = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: 16px;
  width: 90%;
`;
export const RecipeInfoWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const RecipeContentText = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.primary};
`;
