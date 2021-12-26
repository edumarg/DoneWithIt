import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

const user = {
  name: "Edu Marg",
  email: "edu@mail.com",
};

const userOptions = [
  {
    title: "My Listings",
    icon: (
      <Icon
        name="format-list-bulleted"
        size={35}
        color="white"
        backgroundColor={colors.primary}
      />
    ),
  },
  {
    title: "My Messages",
    icon: (
      <Icon
        name="email"
        size={35}
        color="white"
        backgroundColor={colors.secondary}
      />
    ),
  },
];

function MyAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={{ marginBottom: 20 }}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assets/edumarg.png")}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <FlatList
          data={userOptions}
          keyExtractor={(option) => option.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              icon={item.icon}
              onPress={() => console.log("option pressed", item.title)}
            ></ListItem>
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        ></FlatList>
      </View>
      <ListItem
        title={"Log Out"}
        icon={
          <Icon
            name="logout"
            size={35}
            color="white"
            backgroundColor={colors.warning}
          />
        }
      />
    </Screen>
  );
}

export default MyAccountScreen;

const styles = StyleSheet.create({ screen: { backgroundColor: colors.light } });
