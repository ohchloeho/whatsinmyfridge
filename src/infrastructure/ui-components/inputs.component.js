import React from "react";
import { themes } from "../themes";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "./spacer.component";

const Input = styled(TextInput).attrs({
  mode: "outlined",
  outlineColor: themes.colors.ui.lightMode_secondary,
  activeOutlineColor: themes.colors.ui.lightMode_secondary,
  fontFamily: "Futura",
  theme: { fonts: { regular: "" } },
})`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const CustomInput = ({ label, onChangeText, size = 100 }) => {
  return (
    <Spacer position="bottom" size="medium">
      <Input
        label={<Text style={{ fontFamily: "Futura" }}>{label}</Text>}
        onChangeText={onChangeText}
        width={size}
        height={46}
      />
    </Spacer>
  );
};