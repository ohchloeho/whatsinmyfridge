import React, { useContext } from "react";
import { themes } from "../../../infrastructure/themes";
import {
  AppBodyH5,
  AppBodyTextConstrained,
  AppTitle,
} from "../../../infrastructure/ui-components/app-typography.component";
import {
  SafeArea,
  ScreenContainer,
  SectionAreaRow,
} from "../../../infrastructure/ui-components/safe-area.component";
import { InventoryContext } from "../../../services/inventory/inventory.context";
import styled from "styled-components/native";
import { Provider } from "react-native-paper";
import { MenuSlider } from "../../inventory/components/menu.component";

const CategorizedList = styled.FlatList`
  width: 370px;
`;
const QtyColored = styled(AppBodyTextConstrained)`
  color: ${(props) =>
    props.inStock
      ? themes.colors.ui.lightMode_secondary
      : themes.colors.ui.error};
`;

export const CategorizedItems = ({ route, navigation }) => {
  const { inventoryContent, removeInventoryType } =
    useContext(InventoryContext);
  const { filter } = route.params;

  const filteredContent =
    filter === "all"
      ? inventoryContent
      : inventoryContent.filter((obj) => {
          return obj.type === filter;
        });

  return (
    <Provider>
      <SafeArea>
        <ScreenContainer>
          <SectionAreaRow>
            <AppTitle>{filter}</AppTitle>
            <MenuSlider
              catName={filter}
              onDeleteType={() => {
                navigation.navigate("inventory_main")
                if (filter !== "all") {
                  removeInventoryType(filter);
                }

              }}
            />
          </SectionAreaRow>
          <SectionAreaRow>
            <AppBodyH5>item</AppBodyH5>
            <AppBodyH5>purchased</AppBodyH5>
            <AppBodyH5>qty </AppBodyH5>
          </SectionAreaRow>
          {filteredContent && (
            <CategorizedList
              data={filteredContent}
              renderItem={({ item }) => {
                return (
                  <SectionAreaRow>
                    <AppBodyTextConstrained>{item.name}</AppBodyTextConstrained>
                    <AppBodyTextConstrained long>
                      {new Date().toDateString()}
                    </AppBodyTextConstrained>
                    <QtyColored inStock={item.qty > 3 ? true : false}>
                      {item.qty}
                    </QtyColored>
                  </SectionAreaRow>
                );
              }}
            />
          )}
        </ScreenContainer>
      </SafeArea>
    </Provider>
  );
};
