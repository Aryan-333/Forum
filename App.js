import Forum from "./screens/Forum";
import data from "./data/CardData";
import styles from "./App.style";
import { View, SafeAreaView } from "react-native";
import { ForumFlatlist } from "./screens/ForumFlatlist";
import { ForumQnA } from "./screens/ForumQnA";
import answer from "./data/Answer";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";
const CUSTOM_THEME = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#fff" },
};

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <NavigationContainer theme={CUSTOM_THEME}>
        <TabNavigator />
        {/* <ForumFlatlist  /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
