import React from "react";
import { View, ImageBackground, Text, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.logoText}>Sell what you don't need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.signinButton}></View>
    </ImageBackground>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoText: {
    color: colors.black,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  signinButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
