import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket",
    price: "100$",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch",
    price: "1000$",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={item.price}
            image={item.image}
          ></AppCard>
        )}
      ></FlatList>
    </Screen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.light, padding: 20 },
});
