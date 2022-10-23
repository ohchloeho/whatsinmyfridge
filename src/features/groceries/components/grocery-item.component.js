import React, { useState } from "react";
import { SectionAreaRow } from "../../../infrastructure/ui-components/safe-area.component";
import CheckBox from "expo-checkbox";
import { AppBodyTextConstrained } from "../../../infrastructure/ui-components/app-typography.component";

export const GroceryItem = ({ name, type, qty }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SectionAreaRow>
      <AppBodyTextConstrained>{name}</AppBodyTextConstrained>
      <AppBodyTextConstrained long>{type.toLowerCase()}</AppBodyTextConstrained>
      <AppBodyTextConstrained>{qty}</AppBodyTextConstrained>
      <CheckBox
        disabled={false}
        value={isChecked}
        onValueChange={() => {
          setIsChecked(!isChecked);
        }}
      />
    </SectionAreaRow>
  );
};
