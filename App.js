import Forum from "./screens/Forum";
import CardData from "./data/CardData";
import styles from "./App.style";
import { View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <Forum cardData={CardData} />
      </View>
    </SafeAreaView>
  );
}
