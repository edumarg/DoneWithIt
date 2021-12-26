import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <Screen>
      <View>
        <AppCard
          title="red jacket"
          subtitle="100$"
          image={require("../assets/jacket.jpg")}
        />
        <ListItem
          title="Edu Marg"
          subtitle="3 Listings"
          image={require("../assets/edumarg.png")}
        />
      </View>
    </Screen>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({});
