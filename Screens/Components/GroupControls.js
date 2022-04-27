import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Sizes, Styles } from "../Constants/Constants";
import { MaterialIcons } from "@expo/vector-icons";

const GroupControls = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: Sizes.width - 10,
      }}
    >
      <TouchableOpacity style={styles.controlContainer}>
        <Text
          style={{
            ...Styles.regularText,
            padding: Sizes.padding,
          }}
        >
          More Open
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlContainer}>
        <Text
          style={{
            ...Styles.regularText,
            padding: Sizes.padding,
          }}
        >
          More Close
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupControls;

const styles = StyleSheet.create({
  controlContainer: {
    width: Sizes.width / 2 - 10,
    backgroundColor: "white",
    // marginTop: Sizes.margin,
    marginHorizontal: 4,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
