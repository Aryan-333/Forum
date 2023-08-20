import React from "react";
import styles from "./MutualUpvotes.style";
import { Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const MutualUpvotes = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.images}>
          <Image
            source={{ uri: data.mutualUser.image1 }}
            style={styles.profileImage1}
          />
          <Image
            source={{ uri: data.mutualUser.image2 }}
            style={styles.profileImage2}
          />
        </View>
        <Text style={styles.text}>
          {data.mutualUser.name1} and {data.mutualUser.name2} upvoted{" "}
        </Text>

        <Text style={styles.dot}>&#xb7;</Text>

        <Text style={styles.text}> {data.mutualUser.hour}h</Text>
      </View>

      <View style={styles.revtop}>
        <Feather name="x" size={15} color="#636466" />
      </View>
    </View>
  );
};

export default MutualUpvotes;
