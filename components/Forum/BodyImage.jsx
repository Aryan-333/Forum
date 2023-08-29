import React from "react";
import { View, Image } from "react-native";
import styles from "./BodyImage.style";

const BodyImage = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

export default BodyImage;
