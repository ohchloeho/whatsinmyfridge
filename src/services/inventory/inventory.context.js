import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const [inventoryTypes, setInventoryTypes] = useState([
    { key: "1", value: "all", description: "consists of everything" },
    { key: "2", value: "fresh", description: "fresh fruits and vegetables!" },
    {
      key: "3",
      value: "spices & herbs",
      description: "aromatics that take your cooking skills to another level",
    },
    { key: "4", value: "carbs", description: "grains, gluten, staple foods" },
    { key: "5", value: "dairy", description: "cheese, milk, lacto things" },
    { key: "6", value: "sauces", description: "ketchups, tobascos, etc" },
    { key: "7", value: "drinks", description: "quenches thirst with flavour" },
    { key: "8", value: "protein", description: "meats on land and in water" },
  ]);

  const addNewInventoryType = (newTypeName, newTypeDesc) => {
    let key = inventoryTypes.length + 1;
    if (
      !inventoryTypes
        .map((text) => {
          return text.value;
        })
        .includes(newTypeName.toLowerCase())
    ) {
      setInventoryTypes([
        ...inventoryTypes,
        {
          key: `${key}`,
          value: newTypeName.toLowerCase(),
          description: newTypeDesc.length ? newTypeDesc : "",
        },
      ]);
    }
  };

  const updateLocalStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@inventory", jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const loadLocalStorageData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@inventory");
      return jsonValue != null
        ? setInventoryContent(JSON.parse(jsonValue))
        : null;
    } catch (e) {
      // error reading value
    }
  };

  return (
    <InventoryContext.Provider
      value={{ inventoryContent, inventoryTypes, addNewInventoryType }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
