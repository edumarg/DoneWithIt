import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "./../components/Screen";

function LoginScreen() {
  const [user, setUser] = useState({ email: "", password: "" });
  return (
    <Screen>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <AppTextInput
          iconName="email"
          iconSize={25}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => {
            const myUser = { ...user };
            myUser.email = text;
            setUser(myUser);
          }}
          textContentType="emailAddress"
        />
        <AppTextInput
          iconName="account-key"
          iconSize={25}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          onChangeText={(text) => {
            const myUser = { ...user };
            myUser.password = text;
            setUser(myUser);
          }}
          secureTextEntry={true}
        />
        <AppButton title="Login" onPress={() => console.log("Login: ", user)} />
      </View>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  formContainer: {
    padding: 20,
  },
});
