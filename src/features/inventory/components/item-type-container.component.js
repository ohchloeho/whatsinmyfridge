import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AppSubHeader } from "../../../infrastructure/ui-components/app-typography.component";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colors.ui.darkMode};
  border-radius: 8px;
  padding: 30px;
`;
const ImageBG = styled.Image``; // add styled images to app data to generate images for container BG

export const ItemTypeContainer = ({ label, onPress }) => {
  return (
    <Spacer position="bottom" size="medium">
      <TouchableOpacity onPress={onPress}>
        <Wrapper>
          <AppSubHeader>{label}</AppSubHeader>
        </Wrapper>
      </TouchableOpacity>
    </Spacer>
  );
};
