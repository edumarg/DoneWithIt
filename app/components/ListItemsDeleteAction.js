import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";

function ListItemsDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteAction}>
        <Icon name="trash-can" size={40} color="white" />
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
