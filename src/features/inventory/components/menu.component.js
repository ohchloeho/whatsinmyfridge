import React, { useState, useContext } from "react";
import { themes } from "../../../infrastructure/themes";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Menu } from "react-native-paper";
import { InventoryContext } from "../../../services/inventory/inventory.context";

export const MenuSlider = ({ catName, onDeleteType }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Menu
      visible={visible}
      onDismiss={() => {
        setVisible(false);
      }}
      anchor={
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}
        >
          <MaterialIcons name="menu" size={40} color="black" />
        </TouchableOpacity>
      }
    >
      <Menu.Item
        onPress={onDeleteType}
        title={`delete '${catName}'`}
        titleStyle={{ fontFamily: themes.fontFamily.primary }}
      />
    </Menu>
  );
};
