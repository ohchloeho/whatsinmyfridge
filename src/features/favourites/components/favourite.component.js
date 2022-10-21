import React, { useContext} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../../infrastructure/themes";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

const FavouriteBtnWrapper = styled(TouchableOpacity)``;

export const Favourite = ({ recipe }) => {
  const { favourites, onAddNewItem, onRemoveItem } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find((r) => r.id === recipe.id);

  return (
    <FavouriteBtnWrapper
      onPress={() => {
        !isFavourite ? onAddNewItem(recipe) : onRemoveItem(recipe);
      }}
    >
      <MaterialIcons
        name={isFavourite ? "thumb-up-alt" : "thumb-up-off-alt"}
        size={25}
        color={isFavourite ? themes.colors.ui.lightMode : "black"}
      />
    </FavouriteBtnWrapper>
  );
};
