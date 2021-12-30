import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "./../components/Screen";
import ErrorMsg from "../components/ErrorMsg";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().max(100).label("Email"),
  password: Yup.string().required().min(4).max(18).label("Password"),
});

function LoginScreen() {
  return (
    <Screen>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("Login: ", values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <View style={styles.formContainer}>
            <AppTextInput
              iconName="email"
              iconSize={25}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
            />
            <ErrorMsg message={errors.email} />
            <AppTextInput
              iconName="account-key"
              iconSize={25}
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              onChangeText={handleChange("password")}
              secureTextEntry={true}
            />
            <ErrorMsg message={errors.password} />
            <AppButton title="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
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
  errorText: {
    color: colors.danger,
    fontSize: 10,
  },
});
