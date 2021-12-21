import React from "react";
import { View, StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
