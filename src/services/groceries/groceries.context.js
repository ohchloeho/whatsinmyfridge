import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    // method to update qty of repeated items when added

    // idea - concat all objects after mapping - manipulate groceryList array

    setGroceryList([...objData, ...groceryList]);
  };

  //method to find duplicate obj.name
  const findDuplicateNames = (array)=>{
    
  }

  useEffect(() => {
    console.log(
      groceryList.map((item) => {
        return item.name;
      })
    );
  }, [groceryList]);

  const saveGroceryData = async (groceryData) => {
    try {
      const jsonValue = JSON.stringify(groceryData);
      await AsyncStorage.setItem("@groceryData", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getGroceryData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@groceryData");
      if (jsonValue) {
        setGroceryList(JSON.parse(jsonValue));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getGroceryData();
  }, []);

  useEffect(() => {
    saveGroceryData(groceryList);
  }, [groceryList]);

  return (
    <GroceriesContext.Provider value={{ groceryList, addToGroceries }}>
      {children}
    </GroceriesContext.Provider>
  );
};
