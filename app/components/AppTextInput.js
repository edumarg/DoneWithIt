import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ iconName, iconSize, iconColor, ...rest }) {
  const [myInput, setMyInput] = useState("");
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}

      <TextInput
        onChangeText={(text) => setMyInput(text)}
        style={styles.textInput}
        {...rest}
      />
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: { marginRight: 10 },
  textInput: defaultStyles.textInput,
});
