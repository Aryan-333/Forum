import styles from "./Topbar.style";
import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";

const Topbar = () => {
  return (
    <View style={styles.topBox}>
      <View style={styles.searchBar}>
        <TouchableOpacity style={styles.arrow}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.plusIcon}>
          <Entypo name="plus" size={29} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Topbar;
