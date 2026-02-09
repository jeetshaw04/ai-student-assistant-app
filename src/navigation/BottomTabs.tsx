import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CameraScreen from "../screens/tutor/CameraScreen";
import ResultScreen from "../screens/tutor/ResultScreen";
import PlannerHome from "../screens/planner/PlannerHome";

const Tab = createBottomTabNavigator();
const TutorStack = createNativeStackNavigator();

function TutorNavigator() {
  return (
    <TutorStack.Navigator>
      <TutorStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: "Tutor" }}
      />
      <TutorStack.Screen
        name="Result"
        component={ResultScreen}
        options={{ title: "Result" }}
      />
    </TutorStack.Navigator>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tutor"
        component={TutorNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Planner"
        component={PlannerHome}
      />
    </Tab.Navigator>
  );
}
