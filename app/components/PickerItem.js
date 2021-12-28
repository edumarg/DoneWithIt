import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, { padding: 20 }]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default PickerItem;

const styles = StyleSheet.create({
  text: defaultStyles.text,
});
