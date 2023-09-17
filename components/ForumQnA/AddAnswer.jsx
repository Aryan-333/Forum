import React from "react";
import styles from "./AddAnswer.style";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const AddAnswer = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.main}>
        <View style={styles.container}>
          <TextInput
            placeholder="Add a Answer"
            style={styles.textInput}
            placeholderTextColor="grey" // Placeholder text color
          />
        </View>
        <TouchableOpacity style={styles.plusIcon}>
          <Entypo name="plus" size={29} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddAnswer;
