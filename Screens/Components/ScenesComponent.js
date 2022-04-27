import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Sizes, Styles } from "../Constants/Constants";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    name: "All Off",
  },
  {
    id: "2",
    name: "Bright",
  },
  {
    id: "3",
    name: "All Off",
  },
  {
    id: "4",
    name: "Bright",
  },
];

const ScenesComponent = () => {
  return (
    <View style={{ height: 170 }}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.cardContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome name="rocket" size={24} color="red" />
                <Text
                  style={{
                    ...Styles.regularText,
                    paddingLeft: Sizes.padding + 20,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ScenesComponent;

const styles = StyleSheet.create({
  cardContainer: {
    width: Sizes.width / 2 - 10,
    backgroundColor: "white",
    marginTop: Sizes.margin,
    marginHorizontal: 4,
    height: 70,

    alignItems: "center",
    justifyContent: "center",
  },
});
