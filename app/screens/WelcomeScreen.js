import React from "react";
import { View, ImageBackground, Text, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
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
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} onPress={() => console.log("Login")} />
        <AppButton
          title={"Register"}
          onPress={() => console.log("Register")}
          color="secondary"
        />
      </View>
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
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 15,
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
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
