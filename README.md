---

# AI Student Assistant Platform

A cross-platform mobile application that helps students learn and plan their studies using Artificial Intelligence.
The platform combines real-time object recognition with contextual language learning and a smart study planning module.

---

## Features

* Camera-based object detection for real-world vocabulary learning
* Contextual word and sentence generation using a Large Language Model (LLM)
* Multi-language support (Spanish, French, German)
* Text-to-speech pronunciation for detected vocabulary
* Smart study planner for personalized daily schedules
* Modular and scalable architecture using React Native

---

## Tech Stack

* React Native, Expo, TypeScript
* Google ML Kit (on-device object labeling)
* OpenAI API (LLM for language generation)
* Expo Camera & Expo Speech
* Git, GitHub

---

## Project Structure

```
src/
 ├─ components/
 ├─ navigation/
 ├─ screens/
 │   ├─ tutor/
 │   └─ planner/
 ├─ services/
 ├─ utils/
 └─ types/
```

---

## How It Works

1. The user captures an image using the mobile camera.
2. The app detects the object using an on-device vision model.
3. The detected object is sent to an LLM to generate a translated word and a simple example sentence.
4. The result is displayed and pronounced using text-to-speech.
5. The study planner generates schedules based on user input such as subjects and difficulty levels.

---

## Getting Started

```bash
npm install
npx expo prebuild
npx expo run:android
```

---

## Author

Jeet Shaw
