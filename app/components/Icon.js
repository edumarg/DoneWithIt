import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //npm @expo/vector-icons
import { StyleSheet } from "react-native";

function Icon({ name, size = 40, color = "#fff", backgroundColor = "#000" }) {
  return (
    <View
      style={{
        width: size * 1.5,
        height: size * 1.5,
        borderRadius: (size * 1.5) / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
}

export default Icon;

const styles = StyleSheet.create({});
