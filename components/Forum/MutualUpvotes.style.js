import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
  },
  text: {
    color: "#939598",
  },
  profileImage1: {
    width: 25,
    height: 25,
    borderRadius: 50 / 2,
    marginRight: -10,
    zIndex: 1,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
  },
  profileImage2: {
    width: 25,
    height: 25,
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
  },
});
export default styles;
