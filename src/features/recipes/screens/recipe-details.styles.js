import styled from "styled-components";
import { ActivityIndicator, Colors } from "react-native-paper";

export const Loader = styled(ActivityIndicator).attrs({
  animating: true,
  color: Colors.green700,
  size: 50,
})`
  margin-top: 90px;
`;



