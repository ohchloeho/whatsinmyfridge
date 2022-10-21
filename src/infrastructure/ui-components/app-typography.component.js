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
export const AppBodyHeader = styled.Text`
  font-size: ${themes.fontSizes.h5};
  font-family: ${themes.fontFamily.primary};
  color: ${props=>props.green ? themes.colors.ui.lightMode_secondary: themes.colors.ui.error};
`;
export const AppBodyH5 = styled.Text`
  font-size: ${themes.fontSizes.h5};
  font-family: ${themes.fontFamily.primary};
`;
export const AppBodyText = styled.Text`
  font-size: ${themes.fontSizes.body};
  font-family: ${themes.fontFamily.primary};
`;
