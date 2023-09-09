import React from "react";
import Forum from "../screens/Forum";
import { FlatList, View, Text } from "react-native";
import Topbar from "../components/ForumQnA/Topbar";
import Audio from "../components/ForumQnA/Audio";
import { ScrollView } from "react-native-web";
import styles from "./ForumQnA.style";
import { PostHeader } from "../components/Forum/PostHeader";
import { CardActionBar } from "../components/Forum/CardActionBar";
// import { CardAudio } from "../components/ForumQnA/CardAudio";
import MutualUpvotes from "../components/Forum/MutualUpvotes";
import { CardBody } from "../components/Forum/CardBody";
import { Tags } from "../components/Forum/Tags";
import answer from "../data/Answer";

// id: "1",
// content:
//   "This is an answer to a question. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam omnis est consequuntur perferendis autem non voluptate. Provident illum nihil, odit, officia molestias sint molestiae nulla dolor blanditiis ab itaque.",
// image: "https://example.com/image.png",
// audio:
//   "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
// upvotes: 10,
// downvotes: 2,
// questionID: "2",
// openForCollab: true,
// userID: "3",
// likes: 10,
// retweets: 5,

// user: {
//   name: "Bard",
//   profile_image_url: "https://avatars.githubusercontent.com/u/84225214?v=4",
//   organisation: "Army Public School",
//   designation: "Student",
// },
// };

export const ForumQnA = ({ route }) => {
  const { post } = route.params;
  const { bodyImage, bodyLink, GIF, ...restData } = post;

  return (
    <ScrollView>
      <Topbar />
      <View style={styles.container}>
        <View style={styles.tweetCard}>
          <MutualUpvotes data={restData} />
          <PostHeader data={restData} />
          <CardBody data={restData} />
          <Tags data={restData} />
          <CardActionBar data={restData} />
        </View>
        <Text>Answers</Text>
        <View style={styles.answer}>
          <PostHeader data={answer} />
          <CardBody data={answer} />
          <Audio />
          <CardActionBar data={answer} />
        </View>
      </View>
    </ScrollView>
  );
};
