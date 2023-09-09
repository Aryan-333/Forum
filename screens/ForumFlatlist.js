import React from "react";
import Forum from "../screens/Forum";
import { FlatList, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

import { ForumQnA } from "./ForumQnA";
import data from "../data/CardData";

export const ForumFlatlist = ({ navigation }) => {
  // const navigation = useNavigation();

  const handlePostPress = (post) => {
    navigation.navigate("ForumQnA", { post });
    // console.log("I am inside handlePostPress");
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Forum onPress={() => handlePostPress(item)} cardData={item} />
          </View>
        )}
      />
    </View>
  );
};
