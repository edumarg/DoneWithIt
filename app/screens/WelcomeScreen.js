import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
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
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  signinButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
});

export default WelcomeScreen;
