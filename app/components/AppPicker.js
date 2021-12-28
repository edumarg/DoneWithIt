import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  Button,
} from "react-native";
import PickerItem from "./PickerItem";
import ListItemSeparator from "./ListItemSeparator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppPicker({
  iconName,
  iconSize,
  iconColor,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisibility(true)}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={styles.icon}
            />
          )}
          <Text style={[styles.textInput, { flex: 1 }]}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={iconSize}
            color={iconColor}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisibility} animationType="slide">
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                console.log("Category pressed: ", item.label);
                setModalVisibility(false);
                onSelectItem(item);
              }}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
        <Button
          title="close"
          onPress={() => setModalVisibility(false)}
        ></Button>
      </Modal>
    </React.Fragment>
  );
}

export default AppPicker;

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
  textInput: defaultStyles.text,
});
