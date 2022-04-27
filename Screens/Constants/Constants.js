import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Colors = {
  backgroundColor: "#f5f5f5",
};

const Sizes = {
  height: height,
  width: width,
  margin: 10,
  padding: 10,
};

const Styles = {
  headerText: {
    color: "black",
    fontSize: 18,
  },
  subHeaderText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 14,
  },
  regularText: {
    fontSize: 10,
    color: "black",
  },
};

export { Sizes, Colors, Styles };
