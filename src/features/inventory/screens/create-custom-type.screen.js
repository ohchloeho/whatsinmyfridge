import React, { useContext, useState } from "react";
import { IconButton } from "../../../infrastructure/ui-components/button.component";
import { AppTitle } from "../../../infrastructure/ui-components/app-typography.component";
import { CustomInput } from "../../../infrastructure/ui-components/inputs.component";
import { SafeArea } from "../../../infrastructure/ui-components/safe-area.component";
import { ScreenContainer } from "../../../infrastructure/ui-components/safe-area.component";
import { InputContainer, ButtonContainer } from "./add-new-inventory.screen";
import { InventoryContext } from "../../../services/inventory/inventory.context";

export const CustomItemTypeScreen = ({ navigation }) => {
  const { addNewInventoryType } = useContext(InventoryContext);
  const [typeName, setTypeName] = useState("");
  const [typeDesc, setTypeDesc] = useState("");

  return (
    <SafeArea>
      <ScreenContainer>
        <AppTitle>custom item type</AppTitle>
        <InputContainer>
          <CustomInput
            label="type name"
            size={300}
            value={typeName}
            onChangeText={(e) => {
              setTypeName(e);
            }}
          />
          <CustomInput
            label="description"
            size={300}
            value={typeDesc}
            onChangeText={(e) => {
              setTypeDesc(e);
            }}
          />
          <ButtonContainer>
            <IconButton
              iconName="cancel"
              label="cancel"
              size={100}
              onPress={() => {
                navigation.navigate("inventory_add");
              }}
            />
            <IconButton
              iconName="plus"
              label="create"
              size={100}
              onPress={() => {
                if (typeName.length) {
                  addNewInventoryType(typeName, typeDesc);
                  setTypeDesc("");
                  setTypeName("");
                  navigation.navigate("inventory_add");
                }
              }}
            />
          </ButtonContainer>
        </InputContainer>
      </ScreenContainer>
    </SafeArea>
  );
};
