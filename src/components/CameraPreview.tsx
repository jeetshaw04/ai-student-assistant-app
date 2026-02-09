import { StyleSheet } from "react-native";
import { CameraView } from "expo-camera";
import { forwardRef } from "react";

const CameraPreview = forwardRef<any, {}>((props, ref) => {
  return <CameraView ref={ref} style={styles.camera} />;
});

export default CameraPreview;

const styles = StyleSheet.create({
  camera: {
    flex: 1
  }
});
