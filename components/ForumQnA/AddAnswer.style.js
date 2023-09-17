import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 344,
    height: 46,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    color: "black",
    paddingHorizontal: 16,
  },
  main: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    alignContent: "center",
  },
  plusIcon: {
    marginTop: 5,
  },
});

export default styles;
