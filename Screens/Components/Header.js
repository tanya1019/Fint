import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Sizes, Styles } from "../Constants/Constants";

const Header = ({ title, sx }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={{ ...Styles.subHeaderText, ...sx }}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    margin: Sizes.margin - 5,
  },
});
