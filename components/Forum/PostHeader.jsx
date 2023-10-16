import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./PostHeader.style";
import { Photo } from "../../designComponents/ProfileIcons/Photo";
import { PhotoSize } from "../../designComponents/ProfileIcons/Photo";

export const PostHeader = ({ data }) => {
  return (
    <View style={styles.header}>
      <Photo size={PhotoSize.$36} />
      <View style={styles.side}>
        <View style={styles.topRow}>
          <Text style={styles.username}>{data.user.name}</Text>
          <Text style={styles.separator}> &#xb7; </Text>
          <Text style={styles.follow}>Follow</Text>
        </View>
        <View style={styles.topRow}>
          <Text style={styles.text}>
            {data.user.designation} at {data.user.organisation}
          </Text>
          <Text style={styles.dot}> &#xb7;</Text>
        </View>
      </View>
    </View>
  );
};
