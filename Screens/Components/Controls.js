import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Sizes, Styles } from "../Constants/Constants";
import { Ionicons } from "@expo/vector-icons";

const Controls = () => {
  return (
    <View>
      <View
        style={{
          width: Sizes.width - 20,
          backgroundColor: "white",
          height: 70,
          marginBottom: Sizes.margin,
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="chevron-forward-circle"
          size={24}
          color="grey"
          style={{ paddingLeft: Sizes.padding }}
        />
        <View style={{ paddingLeft: Sizes.padding }}>
          <Text>Window Roller Blind</Text>
          <Text>OFF</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: Sizes.width - 20,
        }}
      >
        <TouchableOpacity style={styles.controlContainer}>
          <Text
            style={{
              ...Styles.regularText,
              padding: Sizes.padding,
              color: "purple",
            }}
          >
            Open
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlContainer}>
          <Text
            style={{
              ...Styles.regularText,
              padding: Sizes.padding,
            }}
          >
            Pause
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlContainer}>
          <Text
            style={{
              ...Styles.regularText,
              padding: Sizes.padding,
            }}
          >
            Close
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: Sizes.margin,
          width: Sizes.width - 20,
        }}
      >
        <TouchableOpacity style={styles.montrolContainer}>
          <Text
            style={{
              ...Styles.regularText,
              padding: Sizes.padding,
            }}
          >
            Blackout
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.montrolContainer}>
          <Text
            style={{
              ...Styles.regularText,
              padding: Sizes.padding,
            }}
          >
            Flip +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  controlContainer: {
    width: Sizes.width / 3 - 10,
    backgroundColor: "white",
    // marginTop: Sizes.margin,
    marginHorizontal: 4,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  montrolContainer: {
    width: Sizes.width / 2 - 10,
    backgroundColor: "white",
    // marginTop: Sizes.margin,
    marginHorizontal: 4,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
