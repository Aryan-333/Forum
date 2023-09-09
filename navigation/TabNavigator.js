import React, { Component } from "react";
import { Text, View } from "react-native";
import { ForumFlatlist } from "../screens/ForumFlatlist";
import { ForumQnA } from "../screens/ForumQnA";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigator from "./AppNavigator";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
          headerShown: false,
        }}
        name="ForumFlatlistScreen"
        component={AppNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
