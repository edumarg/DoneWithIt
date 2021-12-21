import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItem from "./../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemsDeleteAction from "../components/ListItemsDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/edumarg.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("message pressed", item.description)}
            renderRightActions={() => (
              <ListItemsDeleteAction
                onPress={() => console.log("delete", item.id)}
              />
            )}
          ></ListItem>
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      ></FlatList>
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({});
