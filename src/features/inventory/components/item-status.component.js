import React from "react";
import styled from "styled-components/native";
import { themes } from "../../../infrastructure/themes";
import {
  AppBodyHeader,
  AppBodyText,
} from "../../../infrastructure/ui-components/app-typography.component";
import {
  CircleButton,
} from "../../../infrastructure/ui-components/button.component";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";

const Wrapper = styled.View`
  border: 2px solid ${(props) => props.theme.colors.ui.darkMode};
  border-radius: 20px;
  width: 370px;
  height: 150px;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;
const FlexRowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 330px;
  height: 45px;
`;

export const ItemStatus = ({
  status = true,
  itemsRequiringAttention = [],
}) => {
  // if status is true, food items are alright and no attention is required
  // if status is false, food items mentioned are soon to expire or low in stock
  if (status) {
    return (
      <Wrapper>
        <AppBodyHeader green>all in order!</AppBodyHeader>
        <Spacer position="top" size="small">
          <AppBodyText>
            looks like your inventory is currently stocked up and items have
            shelf lives of more than a week!
          </AppBodyText>
        </Spacer>
        <Spacer position="top" size="small">
          <FlexRowWrapper>
            <AppBodyText>
              check out some of your favourited recipes!
            </AppBodyText>
            <CircleButton size={35} color={themes.colors.ui.lightMode_secondary}/>
          </FlexRowWrapper>
        </Spacer>
      </Wrapper>
    );
  } else {
    // add conditional rendering to list out max 3 items on screen only
    return (
      <Wrapper>
        <AppBodyHeader>warning!</AppBodyHeader>
        <Spacer position="top" size="small">
          <AppBodyText>
            (item 1) expires in ___ days, (item 2) is running low, and much
            more!
          </AppBodyText>
        </Spacer>
        <Spacer position="top" size="small">
          <FlexRowWrapper>
            <AppBodyText>
              check out recipes that include (item 1) here
            </AppBodyText>
            <CircleButton size={35} color={themes.colors.ui.error}/>
          </FlexRowWrapper>
        </Spacer>
      </Wrapper>
    );
  }
};
