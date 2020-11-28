import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";

// Screens
import { Main } from "./src/Main";
import { Compose } from "./src/Compose";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Compose" component={Compose} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
