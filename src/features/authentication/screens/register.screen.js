import React, { useState, useContext } from "react";
import {
  FullWidthInput,
  PasswordInput,
} from "../../../infrastructure/ui-components/inputs.component";
import {
  SafeArea,
  LoginScreenContainer,
} from "../../../infrastructure/ui-components/safe-area.component";
import {
  AppSubHeader,
  AppBodyText,
} from "../../../infrastructure/ui-components/app-typography.component";
import { Spacer } from "../../../infrastructure/ui-components/spacer.component";
import { RectButton } from "../../../infrastructure/ui-components/button.component";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

import { AuthContext } from "../../../services/authentication/auth.context";

const LoginContainer = styled.View`
  margin-top: 200px;
  flex-direction: column;
  justify-content: center;
`;

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { register } = useContext(AuthContext);

  return (
    <SafeArea>
      <LoginScreenContainer>
        <LoginContainer>
          <AppSubHeader>register</AppSubHeader>
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
          <PasswordInput
            label="repeat password"
            value={repeatPassword}
            onChangeText={(e) => {
              setRepeatPassword(e);
            }}
          />
          <RectButton
            title="register"
            onPress={() => {
              if (email && repeatPassword === password) {
                register(email, password);
                setEmail("");
                setPassword("");
                setRepeatPassword("");
              }
            }}
          />
          <Spacer position="top" size="small" />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <AppBodyText> back to login</AppBodyText>
          </TouchableOpacity>
        </LoginContainer>
      </LoginScreenContainer>
    </SafeArea>
  );
};
