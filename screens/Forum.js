import React from "react";
import { View } from "react-native";
import styles from "./Forum.style";

import SearchBar from "../components/Forum/SearchBar";
import MutualUpvotes from "../components/Forum/MutualUpvotes";
import { PostHeader } from "../components/Forum/PostHeader";
import { CardBody } from "../components/Forum/CardBody";
import { Tags } from "../components/Forum/Tags";
import { CardActionBar } from "../components/Forum/CardActionBar";

const TweetCard = ({ cardData }) => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.tweetCard}>
        <MutualUpvotes data={cardData} />
        <PostHeader data={cardData} />
        <CardBody data={cardData} />
        <Tags data={cardData} />
        <CardActionBar data={cardData} />
      </View>
    </View>
  );
};

export default TweetCard;
