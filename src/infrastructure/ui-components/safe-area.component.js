import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  width: 100%;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.background.primary};
`;

export const ScreenContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;
