import React from "react";
import { View, Image } from "react-native";
import styles from "./BodyGIF.style";

export const BodyGIF = ({ GIF }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.gif}
        source={{
          uri: GIF,
        }}
      />
    </View>
  );
};
