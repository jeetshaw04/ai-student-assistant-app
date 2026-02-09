export function buildPrompt(objectName: string, language: string) {
  return `
You are a language tutor.

For the object "${objectName}", return ONLY JSON:

{
  "word": "",
  "sentence": "",
  "meaning": ""
}

Language: ${language}
Sentence should be very simple.
`;
}
