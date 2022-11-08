import React, { useContext, useEffect } from "react";
import {
  AppBodyH5,
  AppBodyText,
  AppBodyTextConstrained,
  AppTitle,
} from "../../../infrastructure/ui-components/app-typography.component";
import {
  SafeArea,
  ScreenContainer,
  SectionAreaRow,
} from "../../../infrastructure/ui-components/safe-area.component";
import styled from "styled-components/native";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import { GroceriesContext } from "../../../services/groceries/groceries.context";
import { GroceryItem } from "../components/grocery-item.component";
import Checkbox from "expo-checkbox";

const GroceriesList = styled.FlatList.attrs({})`
  width: 370px;
`;

export const GroceriesScreen = () => {
  const { groceryList } = useContext(GroceriesContext);

  useEffect(() => {
    console.log(groceryList);
  }, [groceryList]);

  return (
    <SafeArea>
      <ScreenContainer>
        <AppTitle>groceries</AppTitle>
        <AppBodyH5>things to buy</AppBodyH5>
        <SectionAreaRow>
          <AppBodyTextConstrained long>name</AppBodyTextConstrained>
          <AppBodyTextConstrained long>aisle</AppBodyTextConstrained>
          <AppBodyTextConstrained>qty</AppBodyTextConstrained>
          <Checkbox disabled={true} value={true}/>
        </SectionAreaRow>
          <GroceriesList
            data={groceryList}
            renderItem={({ item }) => {
              return <GroceryItem name={item.name} type={item.aisle} qty={item.amount}/>;
            }}
          />
      </ScreenContainer>
    </SafeArea>
  );
};
