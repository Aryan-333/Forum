import Forum from "./screens/Forum";
import data from "./data/CardData";
import styles from "./App.style";
import { View, SafeAreaView } from "react-native";
import { ForumFlatlist } from "./screens/ForumFlatlist";

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <ForumFlatlist cardData={data} />
      </View>
    </SafeAreaView>
  );
}
