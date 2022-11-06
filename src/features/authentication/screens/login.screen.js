import React, { useState, useContext } from "react";
import {
  SafeArea,
  LoginScreenContainer,
} from "../../../infrastructure/ui-components/safe-area.component";
import {
  FullWidthInput,
  PasswordInput,
} from "../../../infrastructure/ui-components/inputs.component";
import {
  AppBodyText,
  AppSubHeader,
} from "../../../infrastructure/ui-components/app-typography.component";
import styled from "styled-components";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import { TouchableOpacity } from "react-native";
import { RectButton } from "../../../infrastructure/ui-components/button.component";

import { AuthContext } from "../../../services/authentication/auth.context";

const LoginContainer = styled.View`
  margin-top: 200px;
  flex-direction: column;
  justify-content: center;
`;

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <SafeArea>
      <LoginScreenContainer>
        <LoginContainer>
          <AppSubHeader>login</AppSubHeader>
          <Spacer position="top" size="small" />
          <FullWidthInput
            label="email"
            value={email}
            onChangeText={(e) => {
              setEmail(e);
            }}
          />
          <PasswordInput
            label="password"
            value={password}
            onChangeText={(e) => {
              setPassword(e);
            }}
          />
          <RectButton
            title="login"
            onPress={() => {
              if (email && password) {
                login(email, password);
              }
            }}
          />
          <Spacer position="top" size="small" />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("register");
            }}
          >
            <AppBodyText> don't have an account? register here</AppBodyText>
          </TouchableOpacity>
        </LoginContainer>
      </LoginScreenContainer>
    </SafeArea>
  );
};
