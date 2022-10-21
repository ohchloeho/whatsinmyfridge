import React from "react";
import { InventoryScreen } from "../screens/inventory.screen";
import { createStackNavigator } from "@react-navigation/stack";
import { AddNewInventoryScreen } from "../screens/add-new-inventory.screen";
import { CustomItemTypeScreen } from "../screens/create-custom-type.screen";
import { CategorizedItems } from "../screens/categorized-item.screen";

const InventoryStack = createStackNavigator();

export const InventoryNavigator = () => {
  return (
    <InventoryStack.Navigator screenOptions={{ headerShown: false }}>
      <InventoryStack.Screen
        name="inventory_main"
        component={InventoryScreen}
      />
      <InventoryStack.Screen
        name="inventory_add"
        component={AddNewInventoryScreen}
      />
      <InventoryStack.Screen
        name="inventory_custom_type"
        component={CustomItemTypeScreen}
      />
      <InventoryStack.Screen
        name="inventory_categorized-items"
        component={CategorizedItems}
      />
    </InventoryStack.Navigator>
  );
};
