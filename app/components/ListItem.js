import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListItem({ image, title, subtitle }) {
  return (
    <View style={styles.listItem}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    marginHorizontal: 10,
    padding: 15,
  },
  title: {
    color: colors.black,
    alignContent: "flex-start",
    fontSize: 20,
    marginBottom: 5,
  },
  textContainer: { padding: 10 },
  subtitle: {
    color: colors.medium,
    alignContent: "flex-start",
    fontWeight: "bold",
  },
  image: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 35,
    marginRight: 5,
  },
});

export default ListItem;
