import React, { useRef, useEffect, useState } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  // function to capture image
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`user-photo`, photo.uri); // saves photo
      console.log(photo);
    }
  };

  // ask for user permission
  // use new reference, mic permissions are required too
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <ProfileCamera
      ref={(r) => (cameraRef.current = r)}
      type={Camera.Constants.Type.front}
    ></ProfileCamera>
  );
};
