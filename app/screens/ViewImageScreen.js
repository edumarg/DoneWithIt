import React from "react";
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //npm @expo/vector-icons
import Screen from "../components/Screen";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.closeIcon}
        onPress={() => console.log("close")}
      >
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.deleteIcon}
        onPress={() => console.log("Delete")}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </TouchableHighlight>
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
