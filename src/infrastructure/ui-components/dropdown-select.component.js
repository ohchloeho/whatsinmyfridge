import React from "react";
import { themes } from "../themes";
import SelectList from "react-native-dropdown-select-list";
import { Spacer } from "./spacer.component";

export const DropdownSelect = ({ size = 300, ...props }) => {
  return (
    <Spacer position="bottom" size="small">
      <SelectList
        data={props.data}
        setSelected={props.setSelected}
        placeholder={props.label}
        boxStyles={{
          width: size,
          borderRadius: 4,
          borderColor: themes.colors.ui.lightMode_secondary,
          height: 46,
          backgroundColor: "#F8F8F8",
        }}
        inputStyles={{
          fontFamily: themes.fontFamily.primary,
          marginLeft: -8,
          fontSize: themes.fontSizes.body,
        }}
        dropdownStyles={{
          backgroundColor: "#F8F8F8",
          borderRadius: 4,
          borderColor: themes.colors.ui.lightMode_secondary,
        }}
        dropdownTextStyles={{ fontFamily: themes.fontFamily.primary }}
      />
    </Spacer>
  );
};
