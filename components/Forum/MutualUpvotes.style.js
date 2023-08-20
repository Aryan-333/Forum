import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 5,
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  revtop: {
    alignItems: "flex-end",
  },
  text: {
    color: "#939598",
    fontSize: 12,
  },
  profileImage1: {
    width: 18,
    height: 18,
    borderRadius: 50 / 2,
    marginRight: -10,
    zIndex: 1,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
  },
  profileImage2: {
    width: 18,
    height: 18,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: "white",
  },
  images: {
    flexDirection: "row",
  },
  dot: {
    color: "#939598",
    fontWeight: "bold",
    fontSize: 12,
  },
});
export default styles;
