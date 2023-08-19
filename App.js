// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Forum from "./screens/Forum";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
// import { Stack, useRouter } from "expo-router"

export default function App() {
  // console.log(require("./assets/images/kemal.jpg"));
  // console.log(Dimensions.get("screen"));
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container]}>
      {/* <Text>This is my first react native app!</Text> */}
      {/* <Image source={require("./assets/images/kemal.jpg")} /> */}
      {/* <TouchableOpacity>
        <Image
          blurRadius={5}
          source={{
            width: 250,
            height: 312,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity> */}
      {/* <Button
        color="red"
        title="Click"
        onPress={() =>
          // Alert.alert("Heading", "Hello", [
          //   { text: "Yes", onPress: () => console.log("yes") },
          //   { text: "No", onPress: () => console.log("no") },
          // ])

          Alert.prompt(
            "My title",
            "my message",
            (text) => console.log(text),
            "login-password",
            "hello"
          )
        }
      /> */}
      {/* <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row", //horizontal
          justifyContent: "center", //main
          alignItems: "center", //secondary
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "green",
            width: 100,
            top: 200,
            left: 50,
            height: 100,
            position: "relative",
          }}
        />
        <View
          style={{
            backgroundColor: "blue",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "black",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "aqua",
            width: 100,
            height: 100,
          }}
        />
      </View> */}
      <View>
        <Forum tweet={tweetData} />
      </View>
    </SafeAreaView>
  );
}

const tweetData = {
  user: {
    name: "Bard",
    profile_image_url: "https://avatars.githubusercontent.com/u/84225214?v=4",
  },
  mutualUser: {
    name1: "Adam D'Angelo",
    name2: "Pete Lada",
    hour: "2",
    image1: "https://avatars.githubusercontent.com/u/84247444?v=4",
    image2: "https://avatars.githubusercontent.com/u/84985214?v=4",
  },
  heading: "Does vectors have a location in space? does it vary with time?",
  body: "This is a question from my Physics textbook. I even couldn't understand the question. Can you explain and answer me?",
  tags: "#maths #vectors",
  likes: 10,
  retweets: 5,
};

// const stylee = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "yellow",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
