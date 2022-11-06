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
export const LoginScreenContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;
export const SectionAreaRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  height: 80px;
  width: ${(props) => (props.full ? "390px" : "370px")};
`;
