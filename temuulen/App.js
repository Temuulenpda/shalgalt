import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import StartScreen from "./screens/StartScreen";
import Hobby from "./screens/Hobby";
import Capable from "./screens/Capable";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffffff",
          },
          headerTintColor: "#0e0c0cff",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "black",
          },
        }}
      >
      
        <Stack.Screen  name="Start" component={StartScreen}/>
        <Stack.Screen  name="Hobby" component={Hobby}/>
        <Stack.Screen  name="Capable" component={Capable}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;