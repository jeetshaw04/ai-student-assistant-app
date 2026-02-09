const banned = [
  "electronics",
  "technology",
  "device",
  "equipment",
  "machine"
];

export function selectBestLabel(labels: any[]) {
  if (!labels || labels.length === 0) return "object";

  const filtered = labels.filter(
    l => !banned.includes(l.text.toLowerCase())
  );

  const list = filtered.length ? filtered : labels;

  list.sort((a, b) => b.confidence - a.confidence);

  return list[0].text;
}
