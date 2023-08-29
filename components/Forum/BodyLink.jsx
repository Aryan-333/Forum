import { LinkPreview } from "@flyerhq/react-native-link-preview";
import { View } from "react-native";
import styles from "./BodyLink.style";

export const BodyLink = ({ link }) => {
  return (
    <View style={styles.container}>
      <LinkPreview
        style={styles.previewContainer}
        text={link}
        enableAnimation
      />
    </View>
  );
};
