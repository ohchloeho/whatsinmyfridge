import React, { useContext } from "react";
import { FlatList, Text } from "react-native";
import { SafeArea } from "../../../infrastructure/ui-components/safe-area.component";
import { SearchBar } from "../components/search.component";
import styled from "styled-components/native";
import { RecipesContext } from "../../../services/recipes/recipes.context";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";

import { Card } from "react-native-paper";
import { RecipeInfoCard } from "../components/recipe-card.component";

const RecipesList = styled(FlatList).attrs({
  contentContainterStyle: { width: 300, padding: 8 },
})`
  flex: 0.95;
  padding: 8px;
`;

export const RecipesScreen = () => {
  const { recipes } = useContext(RecipesContext);
  return (
    <SafeArea>
      <SearchBar />
      <RecipesList
        data={recipes}
        renderItem={({ item }) => {
          return <RecipeInfoCard recipe={item} />;
        }}
      />
    </SafeArea>
  );
};
