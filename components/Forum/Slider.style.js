import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width - 20;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "lightgrey",
  },

  tweetCard: {
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 6,
    marginLeft: 5,
  },
  container1: {
    alignSelf: "center",
    width,
    paddingTop: 10,
  },
});

export default styles;
