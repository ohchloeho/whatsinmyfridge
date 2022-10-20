import React, { useContext} from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../infrastructure/ui-components/safe-area.component";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SearchBar } from "../components/search.component";
import { RecipesContext } from "../../../services/recipes/recipes.context";
import { RecipeInfoCard } from "../components/recipe-card.component";

const RecipesList = styled(FlatList)`
  flex: 1;
  padding-left: 14px;
  padding-right: 14px;
`;
const Loader = styled(ActivityIndicator).attrs({
  animating: true,
  color: Colors.green700,
  size: 50,
})`
  margin-top: 275px;
`;

export const RecipesScreen = ({ navigation }) => {
  const { recipes, isLoading } = useContext(RecipesContext);

  return (
    <SafeArea>
      <SearchBar />
      {isLoading && <Loader />}
      {!isLoading && (
        <RecipesList
          data={recipes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("recipes_details", { recipe: item });
                }}
              >
                <RecipeInfoCard recipe={item} />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeArea>
  );
};
