import React, { useContext } from "react";
import {
  SafeArea,
  SectionAreaRow,
} from "../../../infrastructure/ui-components/safe-area.component";
import { RadioButton } from "../../../infrastructure/ui-components/button.component";
import { SettingsContext } from "../../../services/settings/settings.context";
import { AppBodyText } from "../../../infrastructure/ui-components/app-typography.component";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const SettingsScreen = ({ navigation }) => {
  const { isMetric, changeMeasurement } = useContext(SettingsContext);
  return (
    <SafeArea>
      <SectionAreaRow>
        <AppBodyText>metric enable</AppBodyText>
        <RadioButton
          onChange={() => {
            changeMeasurement();
          }}
          value={isMetric}
        />
      </SectionAreaRow>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("settings_favourites_list");
        }}
      >
        <SectionAreaRow>
          <AppBodyText>favourites list</AppBodyText>
          <AntDesign name="rightcircleo" size={24} color="black" />
        </SectionAreaRow>
      </TouchableOpacity>
    </SafeArea>
  );
};
