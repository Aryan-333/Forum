import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Audio } from "expo-av";

const AudioPlayer = ({ soundURI }) => {
  const [sound, setSound] = useState(null);
  const [paused, setPaused] = useState(true);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  useEffect(() => {
    loadSound();

    () => {
      // UnLoad sound
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [soundURI]);

  const loadSound = async () => {
    if (!soundURI) return;
    const { sound } = await Audio.Sound.createAsync(
      { uri: soundURI },
      {},
      onPlaybackStatusUpdate
    );
    setSound(sound);
  };

  function getDuration(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const playPauseSound = async () => {
    if (!sound) return;

    if (paused) {
      await sound.playFromPositionAsync(0);
    } else {
      await sound.pauseAsync();
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (!status.isLoaded) {
      return;
    }
    setAudioProgress(status.positionMillis / status.durationMillis || 1);
    setPaused(!status.isPlaying);
    setAudioDuration(status.durationMillis || 0);
  };

  return (
    <View style={styles.audioContainer}>
      <Pressable onPress={playPauseSound}>
        <Feather name={paused ? "play" : "pause"} size={24} color="black" />
      </Pressable>
      <View style={styles.audioProgressBackground}>
        <View
          style={[styles.audioForeGround, { left: `${audioProgress * 100}%` }]}
        ></View>
      </View>
      <Text style={{ paddingHorizontal: 5 }}>{getDuration(audioDuration)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  audioContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  audioProgressBackground: {
    height: 3,
    flex: 1,
    backgroundColor: "lightgray",
    borderRadius: 5,
    margin: 10,
    width: "80%",
    flexDirection: "row",
  },
  audioForeGround: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "black",
    position: "absolute",
    top: -3,
  },
});

export default AudioPlayer;
