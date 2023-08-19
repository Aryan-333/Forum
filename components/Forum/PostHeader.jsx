import React from "react";
import { View } from "react-native";
import styles from "./PostHeader.style";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
export const PostHeader = ({ data }) => {
  return (
    <View styles={styles.top}>
      <Image
        source={{ uri: data.user.profile_image_url }}
        style={styles.profileImage}
      />

      <Text style={styles.username}>{data.user.name}</Text>
      <Text style={styles.username}> &#xb7; </Text>
      <Text style={styles.follow}>Follow</Text>
    </View>
  );
};
