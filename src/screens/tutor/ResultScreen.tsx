import { View, Button } from "react-native";
import { useEffect, useState } from "react";

import { getLanguageData } from "../../services/llm.service";
import { speak } from "../../services/speech.service";
import { TutorResult } from "../../types/tutor.types";

import LanguageCard from "../../components/LanguageCard";
import LoadingOverlay from "../../components/LoadingOverlay";

export default function ResultScreen({ route }: any) {
  const { label, language } = route.params;

  const [data, setData] = useState<TutorResult | null>(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getLanguageData(label, language);

    setData(res);
  };

  // 👇 This part shows loading
  if (!data) {
    return <LoadingOverlay text="Generating example..." />;
  }

  // 👇 This is where LanguageCard is used
  return (
    <View style={{ padding: 20 }}>
      <LanguageCard label={label} data={data} />

      <Button
        title="Pronounce"
        onPress={() =>
  speak(
    data.word,
    language === "Spanish"
      ? "es-ES"
      : language === "French"
      ? "fr-FR"
      : "de-DE"
  )
}

      />
    </View>
  );
}
