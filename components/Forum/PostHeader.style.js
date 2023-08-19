import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
  follow: {
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: -0.065,
    color: "#2E69FF",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  username: {
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 18,
  },
});
export default styles;
