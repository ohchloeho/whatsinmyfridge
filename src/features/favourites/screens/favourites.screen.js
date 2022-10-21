import React, { useContext } from "react";
import {
  AppBodyH5,
  AppSubHeader,
} from "../../../infrastructure/ui-components/app-typography.component";
import {
  SafeArea,
  ScreenContainer,
  SectionAreaRow,
} from "../../../infrastructure/ui-components/safe-area.component";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavouritesList = styled.FlatList.attrs({})`
  width: 370px;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  console.log(favourites);
  return (
    <SafeArea>
      <ScreenContainer>
        <Spacer position="top" size="medium">
          <AppSubHeader>Your Saved Favourites</AppSubHeader>
        </Spacer>
        <FavouritesList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <SectionAreaRow>
                <AppBodyH5>{item.title}</AppBodyH5>
                <TouchableOpacity
                  onPress={() => {
                    //fix this please!
                    navigation.navigate("recipes_details", { recipe: item });
                  }}
                >
                  <AntDesign name="rightcircleo" size={24} color="black" />
                </TouchableOpacity>
              </SectionAreaRow>
            );
          }}
        />
      </ScreenContainer>
    </SafeArea>
  );
};
