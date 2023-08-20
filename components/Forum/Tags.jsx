import React from "react";
import { View, Text } from "react-native";
import styles from "./Tags.style";

export const Tags = ({ data }) => {
  return (
    <View>
      <Text style={styles.tags}>{data.tags}</Text>
    </View>
  );
};
