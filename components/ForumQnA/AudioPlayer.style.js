import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#F1F4F7",
  },
  rowContainer: {
    flexDirection: "row", // Icon and slider in a row
    marginLeft: 14,
    alignItems: "center",
  },
  columnContainer: {
    flexDirection: "column", // Slider and text in a column
    alignItems: "center",
    flex: 1, // Center items horizontally
    marginLeft: 10,
    marginRight: 20,
  },
  sliderContainer: {
    flex: 1,
    width: "100%",
    marginTop: 10,
  },
  textColor: {
    color: "#6B779A",
    marginBottom: 10,
    marginTop: -5,
  },
  leftText: {
    marginRight: windowWidth * 0.75,
    marginBottom: 5,
  },
  rightText: {
    marginLeft: windowWidth * 0.1,
    marginBottom: 5,
  },
});

export default styles;
