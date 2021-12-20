import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppButton = ({ color = "primary", title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
});
