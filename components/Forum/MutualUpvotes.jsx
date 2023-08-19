import React from "react";
import styles from "./MutualUpvotes.style";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const MutualUpvotes = ({ tweet }) => {
  return (
    <View style={styles.top}>
      <View style={styles.images}>
        <Image
          source={{ uri: tweet.mutualUser.image1 }}
          style={styles.profileImage1}
        />
        <Image
          source={{ uri: tweet.mutualUser.image2 }}
          style={styles.profileImage2}
        />
      </View>
      <Text style={styles.text}>
        {tweet.mutualUser.name1} and {tweet.mutualUser.name2} upvoted{" "}
      </Text>

      <Text style={styles.dot}>&#xb7;</Text>

      <Text style={styles.text}> {tweet.mutualUser.hour}h</Text>
    </View>
  );
};

export default MutualUpvotes;
