import React, { useState } from "react";
import { themes } from "../themes";
import { Button } from "react-native-paper";
import { TouchableOpacity, Switch } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const IconButton = ({ iconName, onPress, label, size = 200 }) => {
  return (
    <Button
      icon={iconName}
      onPress={onPress}
      mode="contained"
      color={themes.colors.ui.lightMode}
      labelStyle={{
        fontFamily: themes.fontFamily.primary,
        textTransform: "lowercase",
      }}
      style={{ width: size }}
    >
      {label}
    </Button>
  );
};

const CircleButtonBorder = styled.View`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const CircleButton = ({ size = 25, color = "black" }) => {
  return (
    <TouchableOpacity>
      <CircleButtonBorder size={size}>
        <MaterialCommunityIcons
          name="arrow-right-drop-circle-outline"
          size={size / 1.15}
          color={color}
        />
      </CircleButtonBorder>
    </TouchableOpacity>
  );
};

export const RadioButton = (props) => {
  return (
    <Switch
      trackColor={{ false: "#767577", true: themes.colors.ui.lightMode }}
      thumbColor="#f4f3f4"
      ios_backgroundColor="#3e3e3e"
      onValueChange={props.onChange}
      value={props.value}
    />
  );
};
