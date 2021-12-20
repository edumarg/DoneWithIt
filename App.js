import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppCard from "./app/components/AppCard";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        flex: 1,
        padding: 15,
        marginTop: 50,
      }}
    >
      <AppCard
        title="Red jacket"
        subtitle="100$"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
