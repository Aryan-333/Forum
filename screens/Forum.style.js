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
  container1: {
    alignSelf: "center",
    width,
    paddingTop: 10,
  },
});

export default styles;
