import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => console.log("close")}
      >
        <MaterialCommunityIcons name="close" size={50} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteIcon}
        onPress={() => console.log("Delete")}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={50}
          color="white"
        />
      </TouchableOpacity>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

export default ViewImageScreen;
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
