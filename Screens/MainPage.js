import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors, Sizes, Styles } from "../Screens/Constants/Constants";
import Header from "./Components/Header";
import ScenesComponent from "./Components/ScenesComponent";
import GroupControls from "./Components/GroupControls";
import Controls from "./Components/Controls";

const MainPage = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.mainpageContainer}>
        <Ionicons name="chevron-back" size={24} color="grey" />
        <MaterialCommunityIcons name="menu" size={24} color="grey" />
      </View>
      <View style={{ margin: Sizes.margin }}>
        <Text style={{ ...Styles.headerText }}>Shade Control</Text>
        <Text style={{ ...Styles.regularText, color: "grey" }}>
          Living Room
        </Text>
      </View>
      <Header title={"SCENES"} />
      <ScenesComponent />
      <Header title={"GROUP CONTROLS"} />
      <GroupControls />
      <Header
        title={"CONTROLS"}
        sx={{
          marginTop: Sizes.margin,
        }}
      />
      <Controls />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },

  mainpageContainer: {
    marginTop: Sizes.margin + 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Sizes.padding,
  },
});
