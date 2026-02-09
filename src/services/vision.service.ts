import ImageLabeling from "@react-native-ml-kit/image-labeling";

export async function detectObject(imagePath: string) {
  const labels = await ImageLabeling.label(imagePath);
  return labels;
}
