import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import styles from "./AudioPlayer.style";

const AudioPlayer = ({ data }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [positionMillis, setPositionMillis] = useState(0);
  const [durationMillis, setDurationMillis] = useState(0);

  async function playSound() {
    if (sound) {
      if (isPlaying) {
        // If sound is already playing, pause it and remember the current position
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        // If sound was paused, resume from the last position
        await sound.playAsync();
        setIsPlaying(true);
      }
    } else {
      const { sound } = await Audio.Sound.createAsync({
        uri: data.audio,
      });
      setSound(sound);

      await sound.playAsync();
      setIsPlaying(true);

      const status = await sound.getStatusAsync();
      setDurationMillis(status.durationMillis);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (isPlaying) {
        const status = await sound.getStatusAsync();
        setPositionMillis(status.positionMillis);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, sound]);

  return (
    <View style={styles.box}>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={playSound}>
          {isPlaying ? (
            <AntDesign name="pausecircle" size={24} color="#6B779A" />
          ) : (
            <AntDesign name="play" size={24} color="#6B779A" />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.columnContainer}>
        <View style={styles.sliderContainer}>
          <Slider
            style={{ width: "100%" }}
            value={positionMillis}
            maximumValue={durationMillis}
            minimumValue={0}
            step={1000}
            thumbTintColor="#3E64FF"
            minimumTrackTintColor="#3E64FF"
            onValueChange={(value) => {
              if (sound) {
                sound.setPositionAsync(value);
                setPositionMillis(value);
              }
            }}
          />
        </View>

        <Text style={styles.textColor}>
          <Text style={styles.leftText}>
            {Math.floor(positionMillis / 60000)}:
            {(Math.floor(positionMillis / 1000) % 60)
              .toString()
              .padStart(2, "0")}
          </Text>
          {" / "}
          <Text style={styles.rightText}>
            {Math.floor(durationMillis / 60000)}:
            {(Math.floor(durationMillis / 1000) % 60)
              .toString()
              .padStart(2, "0")}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default AudioPlayer;
