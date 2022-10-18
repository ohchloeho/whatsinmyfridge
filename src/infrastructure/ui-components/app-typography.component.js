import { themes } from "../themes/index";
import styled from "styled-components/native";

export const AppTitle = styled.Text`
  font-size: ${themes.fontSizes.h3};
  font-family: ${themes.fontFamily.primary};
`;
export const AppSubHeader = styled.Text`
  font-size: ${themes.fontSizes.h4};
  font-family: ${themes.fontFamily.primary};
`;

export const AppBodyText = styled.Text`
  font-size: ${themes.fontSizes.body};
  font-family: ${themes.fontFamily.primary};
`;
