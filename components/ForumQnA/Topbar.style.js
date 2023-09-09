import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topBox: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    width: 380,
    height: 68,
    flexShrink: 0,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    borderRadius: 10,
    borderBlockColor: "#DEE0E1",
    marginLeft: 5,
  },

  arrow: {
    width: 28,
    height: 24,
    marginLeft: 20,
  },
  plusIcon: {
    height: 29,
    width: 28,
    marginLeft: 290,
  },
});

export default styles;
