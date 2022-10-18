import React from "react";
import { IconButton } from "../../../infrastructure/ui-components/button.component";
import { AppTitle } from "../../../infrastructure/ui-components/app-typography.component";
import { CustomInput } from "../../../infrastructure/ui-components/inputs.component";
import { SafeArea } from "../../../infrastructure/ui-components/safe-area.component";
import { ScreenContainer } from "../../../infrastructure/ui-components/safe-area.component";
import { InputContainer, ButtonContainer } from "./add-new-inventory.screen";

export const CustomItemTypeScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ScreenContainer>
        <AppTitle>custom item type</AppTitle>
          <InputContainer>
            <CustomInput label="type name" size={300} />
            <CustomInput label="description" size={300} />
            <ButtonContainer>
              <IconButton
                iconName="cancel"
                label="cancel"
                size={100}
                onPress={() => {
                  navigation.navigate("inventory_add");
                }}
              />
              <IconButton iconName="plus" label="create" size={100} />
            </ButtonContainer>
          </InputContainer>
      </ScreenContainer>
    </SafeArea>
  );
};
