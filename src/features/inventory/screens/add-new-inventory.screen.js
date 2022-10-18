import React, { useState } from "react";
import { AppTitle } from "../../../infrastructure/ui-components/app-typography.component";
import {
  SafeArea,
  ScreenContainer,
} from "../../../infrastructure/ui-components/safe-area.component";
import { CustomInput } from "../../../infrastructure/ui-components/inputs.component";
import { IconButton } from "../../../infrastructure/ui-components/button.component";
import { DropdownSelect } from "../../../infrastructure/ui-components/dropdown-select.component";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";

import styled from "styled-components/native";

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 375px;
  align-self: center;
  margin-top: 16px;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 300px;
  justify-content: space-around;
  padding: 20px;
`;

export const AddNewInventoryScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [dropdownValues, setDropdownValues] = useState([
    { key: "1", value: "fresh" },
    { key: "2", value: "spices & herbs" },
    { key: "3", value: "carbs" },
    { key: "4", value: "dairy" },
    { key: "5", value: "sauces" },
    { key: "6", value: "drinks" },
    { key: "7", value: "protein" },
  ]);

  return (
    <SafeArea>
      <ScreenContainer>
        <InputContainer>
          <AppTitle>add new item</AppTitle>
          <CustomInput label="item name" size={300} />
          <CustomInput label="quantity" size={300} />
          <CustomInput label="date purchased" size={300} />
          <CustomInput label="est. shelf life in days" size={300} />
          <DropdownSelect
            data={dropdownValues}
            setSelected={setSelected}
            label="item type"
          />
          <Spacer position="top" size="small">
            <IconButton
              iconName="tag-plus-outline"
              label="create custom type"
              size={200}
              onPress={() => {
                navigation.navigate("inventory_custom_type");
              }}
            />
          </Spacer>

          <ButtonContainer>
            <IconButton
              iconName="cancel"
              label="cancel"
              size={100}
              onPress={() => {
                navigation.navigate("inventory_main");
              }}
            />
            <IconButton iconName="plus" label="save" size={100} />
          </ButtonContainer>
        </InputContainer>
      </ScreenContainer>
    </SafeArea>
  );
};
