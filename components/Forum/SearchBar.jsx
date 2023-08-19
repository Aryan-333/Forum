import styles from "./SearchBar.style";
import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { FontAwesome, Entypo } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.topBox}>
      <View style={styles.searchBar}>
        <TouchableOpacity style={styles.searchIcon}>
          <FontAwesome name="search" size={21} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#636466"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.plusIcon}>
          <Entypo name="plus" size={29} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
