import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    backgroundColor: "#f0f0f0",
  },
  tweetCard: {
    backgroundColor: "#f0f0f0",
  },
  container2: {
    backgroundColor: "lightgrey",
  },
  answer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
  },
  content: {
    color: "black",
    marginTop: 10,
  },
  tweetCard: {
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
  },
  stickyContainer: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 2,
  },
});

export default styles;
