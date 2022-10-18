import React, { useContext } from "react";
import { SafeArea, ScreenContainer } from "../../../infrastructure/ui-components/safe-area.component";
import {
  AppSubHeader,
  AppTitle,
  AppBodyText,
} from "../../../infrastructure/ui-components/app-typography.component";
import { IconButton } from "../../../infrastructure/ui-components/button.component";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import styled from "styled-components/native";

import { InventoryContext } from "../../../services/inventory/inventory.context";

const InventoryList = styled.FlatList``;

export const InventoryScreen = ({navigation}) => {
  const { inventoryContent } = useContext(InventoryContext);
  return (
    <SafeArea>
      <ScreenContainer>
        <AppTitle>inventory</AppTitle>
        <Spacer position="top" size="small">
          <IconButton
            label="add new"
            iconName="plus"
            size={370}
            onPress={() => {
              navigation.navigate("inventory_add");
            }}
          />
        </Spacer>
        <Spacer position="top" size="small">
          <AppSubHeader>contents</AppSubHeader>
        </Spacer>
        <InventoryList
          data={inventoryContent}
          renderItem={({ item }) => {
            return <AppBodyText>{item.name}</AppBodyText>;
          }}
        />
      </ScreenContainer>
    </SafeArea>
  );
};


