import React from "react";
import { View, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";
import ListItem from "../components/ListItem";

function ListingsScreen(props) {
  return (
    <View>
      <AppCard
        title="red jacket"
        subtitle="100%"
        image={require("../assets/jacket.jpg")}
      />
      <ListItem
        title="Edu Marg"
        subtitle="3 Listings"
        image={require("../assets/edumarg.png")}
      />
    </View>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({});
