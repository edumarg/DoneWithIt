import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //npm @expo/vector-icons
import { StyleSheet } from "react-native";

function Icon({ name, size, color, style }) {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
}

export default Icon;

const styles = StyleSheet.create({});
