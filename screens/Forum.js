import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./Forum.style";

import SearchBar from "../components/Forum/SearchBar";
import MutualUpvotes from "../components/Forum/MutualUpvotes";
import { PostHeader } from "../components/Forum/PostHeader";
import { CardBody } from "../components/Forum/CardBody";
import { Tags } from "../components/Forum/Tags";
import { CardActionBar } from "../components/Forum/CardActionBar";
import BodyImage from "../components/Forum/BodyImage"; // Import the BodyImage component
import { BodyLink } from "../components/Forum/BodyLink";
import { BodyGIF } from "../components/Forum/BodyGIF";

const TweetCard = ({ cardData }) => {
  const { bodyImage, bodyLink, GIF, ...restData } = cardData;

  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <View style={styles.tweetCard}>
        <MutualUpvotes data={restData} />
        <PostHeader data={restData} />
        <CardBody data={restData} />
        <Tags data={restData} />
        <CardActionBar data={restData} />
      </View>
      <View style={styles.tweetCard}>
        <MutualUpvotes data={restData} />
        <PostHeader data={restData} />
        <CardBody data={restData} />
        {GIF && <BodyGIF GIF={GIF} />}
        <Tags data={restData} />
        <CardActionBar data={restData} />
      </View>
      <View style={styles.tweetCard}>
        <MutualUpvotes data={restData} />
        <PostHeader data={restData} />
        <CardBody data={restData} />
        {bodyImage && <BodyImage imageUrl={bodyImage} />}
        <Tags data={restData} />
        <CardActionBar data={restData} />
      </View>
      <View style={styles.tweetCard}>
        <MutualUpvotes data={restData} />
        <PostHeader data={restData} />
        <CardBody data={restData} />
        {bodyLink && <BodyLink link={bodyLink} />}
        <Tags data={restData} />
        <CardActionBar data={restData} />
      </View>
    </ScrollView>
  );
};
export default TweetCard;
