import React from "react";
import {
  FlatList,
  ScrollView,
  View,
  TouchableOpacity,
  Touchable,
} from "react-native";
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
import { Footer } from "../components/Forum/Footer";

const Forum = ({ cardData, onPress }) => {
  const { bodyImage, bodyLink, GIF, ...restData } = cardData;

  return (
    <View>
      <SearchBar />
      <TouchableOpacity onPress={onPress}>
        <ScrollView style={styles.container}>
          <View style={styles.tweetCard}>
            <MutualUpvotes data={restData} />
            <PostHeader data={restData} />
            <CardBody data={restData} />
            <Tags data={restData} />
            <CardActionBar data={restData} />
          </View>

          {/* <View style={styles.tweetCard}>
        <MutualUpvotes data={restData} />
        <PostHeader data={restData} />
        <CardBody data={restData} />
        {GIF && <BodyGIF GIF={GIF} />}
        <Tags data={restData} />
        <CardActionBar data={restData} />
      </View> */}
          {/* <View style={styles.tweetCard}>
        <MutualUpvotes data={restData} />
        <PostHeader data={restData} />
        <CardBody data={restData} />
        {bodyImage && <BodyImage imageUrl={bodyImage} />}
        <Tags data={restData} />
        <CardActionBar data={restData} />
      </View> */}
          {/* <View style={styles.tweetCard}>
        <MutualUpvotes data={restData} />
        <PostHeader data={restData} />
        <CardBody data={restData} />
        {bodyLink && <BodyLink link={bodyLink} />}
        <Tags data={restData} />
        <CardActionBar data={restData} />
      </View> */}
          {/* <Footer /> */}
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
};
export default Forum;
