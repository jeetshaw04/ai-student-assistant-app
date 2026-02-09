import * as Speech from "expo-speech";

export function speak(text: string, lang: string) {
  Speech.speak(text, {
    language: lang,
    rate: 0.9
  });
}
