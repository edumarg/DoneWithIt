import React from "react";
import {
  TouchableHighlight,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable"; // expo install react-native-gesture-handler
import colors from "../config/colors";

function ListItem({ image, title, subtitle, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.listItem}>
          <Image source={image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
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
