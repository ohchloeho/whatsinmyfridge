import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RecipesContext } from "../../../services/recipes/recipes.context";

const SearchBarContainer = styled.View`
  padding: 15px;
  justify-self: center;
`;

export const SearchBar = ({ ...props }) => {
  const { onSearch } = useContext(RecipesContext);
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="search recipes..."
        inputStyle={{ fontFamily: "Futura" }}
        value={searchKeyword}
        onIconPress={() => {
          onSearch(searchKeyword);
        }}
        onChangeText={(e) => {
          setSearchKeyword(e);
        }}
      />
    </SearchBarContainer>
  );
};
