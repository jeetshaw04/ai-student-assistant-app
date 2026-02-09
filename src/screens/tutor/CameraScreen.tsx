import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";

import CameraPreview from "../../components/CameraPreview";
import { detectObject } from "../../services/vision.service";
import { selectBestLabel } from "../../utils/labelFilter";

export default function CameraScreen({ navigation }: any) {
  const cameraRef = useRef<any>(null);
  const [permission, requestPermission] = useCameraPermissions();

  const [language, setLanguage] = useState<"Spanish" | "French" | "German">(
    "Spanish"
  );

  if (!permission?.granted) {
    return (
      <View style={styles.center}>
        <Text>Camera permission required</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Grant</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const capture = async () => {
    const photo = await cameraRef.current.takePictureAsync();

    const labels = await detectObject(photo.uri);
    const best = selectBestLabel(labels);

    navigation.navigate("Result", {
      label: best,
      language
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Language selector */}
      <View style={styles.selector}>
        {["Spanish", "French", "German"].map((lang) => (
          <TouchableOpacity
            key={lang}
            style={[
              styles.langButton,
              language === lang && styles.active
            ]}
            onPress={() => setLanguage(lang as any)}
          >
            <Text
              style={[
                styles.langText,
                language === lang && styles.activeText
              ]}
            >
              {lang}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Camera */}
      <CameraPreview ref={cameraRef} />

      {/* Scan button */}
      <TouchableOpacity style={styles.button} onPress={capture}>
        <Text style={{ color: "white" }}>Scan Object</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  selector: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 8,
    backgroundColor: "#000"
  },
  langButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 6,
    borderRadius: 14,
    backgroundColor: "#333"
  },
  active: {
    backgroundColor: "#fff"
  },
  langText: {
    color: "#fff",
    fontSize: 13
  },
  activeText: {
    color: "#000",
    fontWeight: "bold"
  },
  button: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#222",
    padding: 16,
    borderRadius: 10
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
