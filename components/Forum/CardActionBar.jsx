import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./CardActionBar.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather, FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";

export const CardActionBar = ({ data }) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.first}>
        <View style={styles.vote}>
          <View style={styles.up}>
            <TouchableOpacity style={styles.likeButton}>
              <MaterialCommunityIcons
                name="arrow-up-bold-outline"
                size={23}
                color="#2E69FF"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.upvotes}>{data.likes}</Text>
          <Text style={styles.divider}>|</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              style={styles.down}
              name="arrow-down-bold-outline"
              size={23}
              color="grey"
            />
          </TouchableOpacity>
        </View>

        <Feather
          style={styles.refresh}
          name="refresh-ccw"
          size={18}
          color="#636466"
        />

        <FontAwesome
          style={styles.comment}
          name="comment-o"
          size={18}
          color="#636466"
        />
      </View>

      <View style={styles.second}>
        <Ionicons name="md-share-outline" size={18} color="#636466" />

        <Entypo
          style={styles.dots}
          name="dots-three-horizontal"
          size={18}
          color="#636466"
        />
      </View>
    </View>
  );
};
