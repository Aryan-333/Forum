import React from "react";
import { FlatList, View, KeyboardAvoidingView, Platform } from "react-native";
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
  const data = [{ isHeader: true }, ...answer, { isFooter: true }];

  const renderHeader = () => (
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
  );

  const renderAnswer = (item) => (
    <View style={styles.container2}>
      <View style={styles.answer}>
        <PostHeader data={item} />
        <CardBody data={item} />
        <AudioPlayer data={item} />
        <CardActionBar data={item} />
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.stickyFooter}>
      <AddAnswer />
    </View>
  );

  const renderItem = ({ item }) => {
    if (item.isHeader) return renderHeader();
    if (item.isFooter) return renderFooter();
    return renderAnswer(item);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item.isHeader ? "header" : item.isFooter ? "footer" : index.toString()
        }
        stickyHeaderIndices={[0]}
      />
    </KeyboardAvoidingView>
  );
};
