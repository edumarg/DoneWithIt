import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";

function ErrorMsg({ message }) {
  return message ? <Text style={styles.text}>{message}</Text> : null;
}

export default ErrorMsg;

const styles = StyleSheet.create({
  text: {
    color: colors.danger,
    fontSize: 10,
  },
});
