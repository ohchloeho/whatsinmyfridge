import React, { createContext, useState, useEffect } from "react";
import { requestRecipesAPI } from "./recipes.services";

export const RecipesContext = createContext();

export const RecipesContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const onSearch = (word) => {
    setSearchKeyword(word);
  };

  const retreiveRecipes = (searchKeyword, numberOfResults) => {
    requestRecipesAPI(searchKeyword, numberOfResults).then((res) => {
      setRecipes(res.results);
      console.log(res);
    });
  };

  useEffect(() => {
    if (searchKeyword.length) {
      retreiveRecipes(searchKeyword);
    }
  }, [searchKeyword]);

  return (
    <RecipesContext.Provider value={{ recipes, onSearch: onSearch }}>
      {children}
    </RecipesContext.Provider>
  );
};
