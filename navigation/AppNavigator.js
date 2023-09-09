import React, { Component } from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForumFlatlist } from "../screens/ForumFlatlist";
import { ForumQnA } from "../screens/ForumQnA";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="ForumFlatlist"
        component={ForumFlatlist}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ForumQnA"
        component={ForumQnA}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
