import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

interface Props {
  text?: string;
}

export default function LoadingOverlay({ text }: Props) {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginTop: 10
  }
});
