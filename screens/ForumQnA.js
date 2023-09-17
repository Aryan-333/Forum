import React from "react";
import {
  FlatList,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Topbar from "../components/ForumQnA/Topbar";
import AudioPlayer from "../components/ForumQnA/AudioPlayer";
import styles from "./ForumQnA.style";
import { PostHeader } from "../components/Forum/PostHeader";
import { CardActionBar } from "../components/Forum/CardActionBar";
import MutualUpvotes from "../components/Forum/MutualUpvotes";
import { CardBody } from "../components/Forum/CardBody";
import { Tags } from "../components/Forum/Tags";
import answer from "../data/Answer.json";
import AddAnswer from "../components/ForumQnA/AddAnswer";

export const ForumQnA = ({ route }) => {
  const { post } = route.params;
  const { bodyImage, bodyLink, GIF, ...restData } = post;

  const data = answer;

  const renderItem = ({ item }) => (
    <View style={styles.container2}>
      <View style={styles.answer}>
        <PostHeader data={item} />
        <CardBody data={item} />
        <AudioPlayer data={item} />
        <CardActionBar data={item} />
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <View style={styles.stickyContainer}>
            <Topbar />
            <View style={styles.tweetCard}>
              <MutualUpvotes data={restData} />
              <PostHeader data={restData} />
              <CardBody data={restData} />
              <Tags data={restData} />
              <CardActionBar data={restData} />
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.stickyFooter}>
            <AddAnswer />
          </View>
        )}
        stickyHeaderIndices={[0]}
      />
    </KeyboardAvoidingView>
  );
};
