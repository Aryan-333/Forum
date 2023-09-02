import React from "react";
import Forum from "../screens/Forum";
import { FlatList, View } from "react-native";
// import { data } from "../data/CardData";

export const ForumFlatlist = ({ cardData }) => {
  return (
    <View>
      <FlatList
        data={cardData}
        renderItem={({ item }) => <Forum cardData={item} />}
      />
    </View>
  );
};
