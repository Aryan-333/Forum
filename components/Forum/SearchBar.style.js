import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 370,
    height: 68,
    flexShrink: 0,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 15,
    borderRadius: 10,
  },
  searchBar: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 100,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#DEE0E1",
    width: 333,
    height: 34,
    paddingHorizontal: 5,
    marginTop: 5,
    marginLeft: 3,
    gap: 5,
  },
  searchIcon: {
    width: 28,
    height: 24,
  },
  plusIcon: {
    height: 29,
    width: 28,
    marginBottom: 7,
  },
  searchInput: {
    height: 28,
    width: 200,
    borderColor: "#ffffff",
    borderWidth: 0,
    padding: 10,
    color: "black",
  },
});

export default styles;
