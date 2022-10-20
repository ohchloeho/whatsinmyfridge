import React, { useContext } from "react";
import {
  SafeArea,
  ScreenContainer,
} from "../../../infrastructure/ui-components/safe-area.component";
import {
  AppSubHeader,
  AppTitle,
} from "../../../infrastructure/ui-components/app-typography.component";
import { IconButton } from "../../../infrastructure/ui-components/button.component";
import { ItemTypeContainer } from "../components/item-type-container.component";
import { ItemStatus } from "../components/item-status.component";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import styled from "styled-components/native";

import { InventoryContext } from "../../../services/inventory/inventory.context";

const InventoryTypesList = styled.FlatList.attrs({
  contentContainerStyle: { justifyContent: "center", width: 370 },
})``;

export const InventoryScreen = ({ navigation }) => {
  const { inventoryTypes } = useContext(InventoryContext);
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
        <Spacer position="top" size="medium">
          <ItemStatus />
        </Spacer>
        <Spacer position="top" size="small">
          <AppSubHeader>contents</AppSubHeader>
        </Spacer>
        <InventoryTypesList
          data={inventoryTypes}
          renderItem={({ item }) => {
            return <ItemTypeContainer label={item.value} />;
          }}
        />
      </ScreenContainer>
    </SafeArea>
  );
};
