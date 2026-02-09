import { buildPrompt } from "../utils/promptBuilder";
import { TutorResult } from "../types/tutor.types";

export async function getLanguageData(
  objectName: string,
  language: string
): Promise<TutorResult> {

  const prompt = buildPrompt(objectName, language);

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENAI_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: prompt }
        ],
        temperature: 0.3
      })
    }
  );

  const data = await response.json();

  return JSON.parse(
    data.choices[0].message.content
  );
}
