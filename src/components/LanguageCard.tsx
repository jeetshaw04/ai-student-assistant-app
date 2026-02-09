import { View, Text, StyleSheet } from "react-native";
import { TutorResult } from "../types/tutor.types";

interface Props {
  label: string;
  data: TutorResult;
}

export default function LanguageCard({ label, data }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Detected: {label}</Text>

      <Text style={styles.word}>{data.word}</Text>

      <Text style={styles.meaning}>{data.meaning}</Text>

      <Text style={styles.sentence}>{data.sentence}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 12
  },
  label: {
    color: "#666",
    marginBottom: 6
  },
  word: {
    fontSize: 22,
    fontWeight: "bold"
  },
  meaning: {
    marginTop: 4,
    fontStyle: "italic"
  },
  sentence: {
    marginTop: 10
  }
});
