import React from "react";
import { SafeArea } from "../../../infrastructure/ui-components/safe-area.component";
import {
  AppSubHeader,
  AppTitle,
} from "../../../infrastructure/ui-components/app-typography.component";
import { IconButton } from "../../../infrastructure/ui-components/button.component";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import styled from "styled-components/native";

const ScreenContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

export const InventoryScreen = () => {
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
              console.log("hello");
            }}
          />
        </Spacer>
        <Spacer position="top" size="small">
          <AppSubHeader>contents</AppSubHeader>
        </Spacer>
      </ScreenContainer>
    </SafeArea>
  );
};
