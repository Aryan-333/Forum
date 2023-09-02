import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import styles from "./Footer.style";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <MaterialCommunityIcons
        name="home-outline"
        size={24}
        color="#656565"
        style={styles.home}
      />
      <MaterialIcons
        name="person-add-alt"
        size={24}
        color="#656565"
        style={styles.add}
      />
      <MaterialIcons
        name="notifications-none"
        size={24}
        color="#656565"
        style={styles.photo}
      />
      <MaterialCommunityIcons
        name="account-group-outline"
        size={24}
        color="#656565"
        style={styles.group}
      />
      <MaterialIcons
        name="notifications-none"
        size={24}
        color="#656565"
        style={styles.notifications}
      />
    </View>
  );
};
