import React, { createContext, useState } from "react";

// API usage for WHOLE list of items: https://shelf-life-api.herokuapp.com/search
// API usage for specific food item https://shelf-life-api.herokuapp.com/guides/ ID

export const InventoryContext = createContext();

export const InventoryContextProvider = ({ children }) => {
  const [inventoryContent, setInventoryContent] = useState([
    {
      itemName: "apple",
      itemQty: 4,
      bestBeforeinDays: 4,
      datePurchased: new Date(),
    },
  ]);

  return <InventoryContext.Provider>{children}</InventoryContext.Provider>;
};
