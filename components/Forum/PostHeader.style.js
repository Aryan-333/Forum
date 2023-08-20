import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginTop: 2,
  },
  side: {
    flexDirection: "column",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -5,
  },
  topColumn: {
    flexDirection: "column",
  },
  follow: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#2E69FF",
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 13,
  },
  separator: {
    fontSize: 18,
    color: "#000",
  },
  text: {
    fontFamily: "SFProText",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18.2,
    letterSpacing: -0.065,
    color: "#636466",
  },
  dot: {
    color: "#636466",
    fontWeight: "bold",
  },
});

export default styles;
