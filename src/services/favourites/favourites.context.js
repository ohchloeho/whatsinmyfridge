import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavouritesLocal = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@recipe_favourites", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const loadFavouritesLocal = async () => {
    try {
      const value = await AsyncStorage.getItem("@recipe_favourites");
      if (value) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  const onAddNewItem = (e) => {
    setFavourites([...favourites, e]);
    console.log("added");
  };
  const onRemoveItem = (e) => {
    console.log("removed");
    const newArr = favourites.filter((item) => {
      return item.id != e.id;
    });
    setFavourites(newArr);
  };

  useEffect(() => {
    loadFavouritesLocal();
  }, []);
  useEffect(() => {
    saveFavouritesLocal(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, onAddNewItem, onRemoveItem }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
