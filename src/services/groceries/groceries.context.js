import React, { createContext, useState } from "react";

export const GroceriesContext = createContext();

export const GroceriesContextProvider = ({ children }) => {
  const [groceryList, setGroceryList] = useState([
    { name: "banana", aisle: "produce", amount: "5" },
  ]);

  // function to add items to groceryList
  const addToGroceries = (objs) => {
    const objData = objs.map((obj) => {
      // metric measurement conditional

      return {
        name: obj.name,
        aisle: obj.aisle,
        amount: `${obj.amount} ${obj.measures.us.unitShort}`,
      };
    });
    setGroceryList([...objData, ...groceryList]);
  };

  return (
    <GroceriesContext.Provider value={{ groceryList, addToGroceries }}>
      {children}
    </GroceriesContext.Provider>
  );
};
