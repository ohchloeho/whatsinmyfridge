import React, { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

// API usage for WHOLE list of items: https://shelf-life-api.herokuapp.com/search
// API usage for specific food item https://shelf-life-api.herokuapp.com/guides/ ID

export const InventoryContext = createContext();

export const InventoryContextProvider = ({ children }) => {
  const [inventoryContent, setInventoryContent] = useState([
    {
      name: "apple",
      qty: 4,
      type: "fresh",
      bestBeforeinDays: 4,
      datePurchased: new Date(),
      img: [],
    },
    {
      name: "bread",
      qty: 1,
      type: "carbs",
      bestBeforeinDays: 5,
      datePurchased: new Date(),
      img: [],
    },
    {
      name: "milk",
      qty: 1,
      type: "dairy",
      bestBeforeinDays: 7,
      datePurchased: new Date(),
      img: [],
    },
  ]);


  return (
    <InventoryContext.Provider value={{ inventoryContent }}>
      {children}
    </InventoryContext.Provider>
  );
};
