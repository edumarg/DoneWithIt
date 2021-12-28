import React, { useState } from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Electronics", value: 2 },
  { label: "Clothing", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState("");
  return (
    <Screen>
      <AppPicker
        iconName={"apps"}
        iconSize={25}
        iconColor={"black"}
        placeholder="category"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
    </Screen>
  );
}
