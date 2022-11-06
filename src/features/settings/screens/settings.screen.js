import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeArea,
  SectionAreaRow,
} from "../../../infrastructure/ui-components/safe-area.component";
import { RadioButton } from "../../../infrastructure/ui-components/button.component";
import { SettingsContext } from "../../../services/settings/settings.context";
import { AppBodyText } from "../../../infrastructure/ui-components/app-typography.component";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../../infrastructure/themes";
import styled from "styled-components/native";

import { AuthContext } from "../../../services/authentication/auth.context";

const ProfileWrapper = styled.View`
  height: 200px;
  width: 390px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { isMetric, changeMeasurement } = useContext(SettingsContext);
  const [photo, setPhoto] = useState(null);
  const { user, logOut } = useContext(AuthContext);

  // method to get stored photo
  const getProfilePicture = async () => {
    const photoURI = await AsyncStorage.getItem(`user-photo`);
    setPhoto(photoURI);
  };
  //use effect here to run above function on render

  return (
    <SafeArea>
      <ProfileWrapper>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("settings_camera");
          }}
        >
          <Avatar.Icon
            size={150}
            icon="human"
            backgroundColor={themes.colors.ui.lightMode_secondary}
          />
        </TouchableOpacity>
        <AppBodyText>{user._tokenResponse.email}</AppBodyText>
      </ProfileWrapper>
      <SectionAreaRow full>
        <AppBodyText>metric enable</AppBodyText>
        <RadioButton
          onChange={() => {
            changeMeasurement();
          }}
          value={isMetric}
        />
      </SectionAreaRow>

      <SectionAreaRow full>
        <AppBodyText>favourites list</AppBodyText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("settings_favourites_list");
          }}
        >
          <AntDesign name="rightcircleo" size={24} color="black" />
        </TouchableOpacity>
      </SectionAreaRow>

      <SectionAreaRow full>
        <AppBodyText>logout</AppBodyText>
        <TouchableOpacity
          onPress={() => {
            console.log(logOut());
          }}
        >
          <MaterialCommunityIcons name="door" size={25} color="black" />
        </TouchableOpacity>
      </SectionAreaRow>
    </SafeArea>
  );
};
