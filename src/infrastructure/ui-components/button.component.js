import React from "react";
import { themes } from "../themes";
import { Button } from "react-native-paper";

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
