import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppCard({ title, subtitle, image, style }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={[styles.image, style]} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  title: {
    color: colors.black,
    alignContent: "flex-start",
    fontSize: 20,
    marginBottom: 5,
  },
  textContainer: {
    padding: 10,
  },
  subtitle: {
    color: colors.secondary,
    alignContent: "flex-start",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default AppCard;
