import React from "react";
import { Text, View } from "react-native";
import styles from "./CardBody.style";

export const CardBody = ({ data }) => {
  return (
    <View>
      <Text style={styles.tweetText}>{data.heading}</Text>
      <Text style={styles.textBody}>{data.body}</Text>
    </View>
  );
};
