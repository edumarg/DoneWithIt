import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItem from "./../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemsDeleteAction from "../components/ListItemsDeleteAction";

const initMessages = [
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

function MessagesScreen() {
  const [messages, setMessages] = useState(initMessages);

  const handleDelete = (message) => {
    console.log("delete", message);
    const filterMessages = messages.filter((m) => m.id !== message.id);
    setMessages(filterMessages);
  };

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
              <ListItemsDeleteAction onPress={() => handleDelete(item)} />
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
