import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: 10,
    alignItems: "center",
  },
  upvotes: {
    fontSize: 12,
    color: "#636466",
    marginRight: 4,
  },
  first: {
    flexDirection: "row",
    alignItems: "center",
  },
  second: {
    flexDirection: "row",
    alignItems: "center",
  },
  up: {
    marginBottom: 5,
    marginRight: 6,
    marginLeft: 6,
  },

  down: {
    marginRight: 6,
    marginLeft: 4,
  },
  divider: {
    fontSize: 20,
    color: "#DEE0E1",
  },
  likeButton: {
    width: 20,
    height: 20,
    borderRadius: 50 / 2,
  },
  refresh: {
    marginLeft: 15,
    marginRight: 20,
  },
  vote: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 100,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  dots: {
    marginLeft: 20,
  },
});
export default styles;
