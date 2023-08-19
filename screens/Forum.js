import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../components/Forum/SearchBar";
import { Entypo } from "@expo/vector-icons";
import MutualUpvotes from "../components/Forum/MutualUpvotes";
import { PostHeader } from "../components/Forum/PostHeader";

const TweetCard = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <SearchBar> </SearchBar>
      <View style={styles.tweetCard}>
        <MutualUpvotes tweet={tweet}></MutualUpvotes>
        <PostHeader data={tweet}></PostHeader>
        <Text style={styles.tweetText}>{tweet.heading}</Text>
        <Text style={styles.textBody}>{tweet.body}</Text>
        <Text style={styles.tags}>{tweet.tags}</Text>
        <View style={styles.statsContainer}>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => console.log("Like button pressed")}
          >
            {/* <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 0.833252L1.5 9.99992H6.5V14.1666H11.5V9.99992H16.5L9 0.833252Z"
                stroke="#2E69FF"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </Svg> */}
            <MaterialCommunityIcons
              name="arrow-up-bold-outline"
              size={24}
              color="#2E69FF"
            />
          </TouchableOpacity>

          <Text style={styles.stats}>{tweet.likes}</Text>
          <MaterialCommunityIcons
            name="arrow-down-bold-outline"
            size={24}
            color="#636466"
          />

          <Feather name="refresh-ccw" size={24} color="#636466" />

          <FontAwesome name="comment-o" size={24} color="#636466" />

          <Ionicons name="md-share-outline" size={24} color="#636466" />

          <Entypo name="dots-three-horizontal" size={24} color="#636466" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "lightgrey",
  },

  tweetCard: {
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
  },

  tweetText: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
  textBody: {
    fontSize: 16,
    marginTop: 5,
  },
  tags: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: 10,
  },
  stats: {
    fontSize: 12,
  },
  likeButton: {
    width: 20,
    height: 20,
    borderRadius: 50 / 2,
    // backgroundColor: "#222B45",
  },
  postHeader: {
    flexDirection: "row",
  },
});

export default TweetCard;
