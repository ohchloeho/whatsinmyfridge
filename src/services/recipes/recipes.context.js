import React, { createContext, useState, useEffect } from "react";
import { requestRecipesAPI } from "./recipes.services";

export const RecipesContext = createContext();

export const RecipesContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("apple");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (word) => {
    setSearchKeyword(word);
  };

  const retreiveRecipes = (searchKeyword, numberOfResults) => {
    requestRecipesAPI(searchKeyword, numberOfResults)
      .then((res) => {
        setIsLoading(false);
        setRecipes(res.results);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    if (searchKeyword.length) {
      setIsLoading(true);
      setTimeout(() => {
        retreiveRecipes(searchKeyword);
      }, 2000);
    }
  }, [searchKeyword]);

  return (
    <RecipesContext.Provider
      value={{ recipes, isLoading, error, onSearch: onSearch }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
