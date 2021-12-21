import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //npm @expo/vector-icons
import colors from "../config/colors";

function ListItemsDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteAction}>
        <MaterialCommunityIcons name="trash-can" size={40} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemsDeleteAction;
const styles = StyleSheet.create({
  deleteAction: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
