// import React, { useEffect, useState } from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import { Slider } from "@miblanchard/react-native-slider";
// import { Audio } from "expo-av";
// import { AntDesign } from "@expo/vector-icons";
// import styles from "./AudioPlayer.style";

// const AudioPlayer = ({ data }) => {
//   const [sound, setSound] = useState();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [positionMillis, setPositionMillis] = useState(0);
//   const [durationMillis, setDurationMillis] = useState(0);

//   async function playSound() {
//     if (sound) {
//       if (isPlaying) {
//         // If sound is already playing, pause it and remember the current position
//         await sound.pauseAsync();
//         setIsPlaying(false);
//       } else {
//         // If sound was paused, resume from the last position
//         await sound.playAsync();
//         setIsPlaying(true);
//       }
//     } else {
//       const { sound } = await Audio.Sound.createAsync({
//         uri: data.audio,
//       });
//       setSound(sound);

//       await sound.playAsync();
//       setIsPlaying(true);

//       const status = await sound.getStatusAsync();
//       setDurationMillis(status.durationMillis);
//     }
//   }

//   useEffect(() => {
//     return sound
//       ? () => {
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);

//   useEffect(() => {
//     const interval = setInterval(async () => {
//       if (isPlaying) {
//         const status = await sound.getStatusAsync();
//         setPositionMillis(status.positionMillis);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [isPlaying, sound]);

//   return (
//     <View style={styles.box}>
//       <View style={styles.rowContainer}>
//         <TouchableOpacity onPress={playSound}>
//           {isPlaying ? (
//             <AntDesign name="pausecircle" size={24} color="#6B779A" />
//           ) : (
//             <AntDesign name="play" size={24} color="#6B779A" />
//           )}
//         </TouchableOpacity>
//       </View>

//       <View style={styles.columnContainer}>
//         <View style={styles.sliderContainer}>
//           <Slider
//             style={{ width: "100%" }}
//             value={positionMillis}
//             maximumValue={durationMillis}
//             minimumValue={0}
//             step={1000}
//             thumbTintColor="#3E64FF"
//             minimumTrackTintColor="#3E64FF"
//             onValueChange={(value) => {
//               if (sound) {
//                 sound.setPositionAsync(value);
//                 setPositionMillis(value);
//               }
//             }}
//           />
//         </View>

//         <Text style={styles.textColor}>
//           <Text style={styles.leftText}>
//             {Math.floor(positionMillis / 60000)}:
//             {(Math.floor(positionMillis / 1000) % 60)
//               .toString()
//               .padStart(2, "0")}
//           </Text>
//           {" / "}
//           <Text style={styles.rightText}>
//             {Math.floor(durationMillis / 60000)}:
//             {(Math.floor(durationMillis / 1000) % 60)
//               .toString()
//               .padStart(2, "0")}
//           </Text>
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default AudioPlayer;
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Audio } from "expo-av";

const AudioPlayer = ({ data }) => {
  const soundURI = data.audio;
  const [sound, setSound] = useState(null);
  const [paused, setPaused] = useState(true);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  useEffect(() => {
    const loadSound = async () => {
      if (!soundURI) return;

      // Create a unique callback for this sound instance
      const playbackStatusUpdate = (status) => {
        if (!status.isLoaded) return;

        if (status.didJustFinish) {
          setAudioProgress(0);
        } else {
          setAudioProgress(status.positionMillis / status.durationMillis || 1);
        }

        setPaused(!status.isPlaying);
        setAudioDuration(status.durationMillis || 0);
      };

      const { sound: loadedSound } = await Audio.Sound.createAsync(
        { uri: soundURI },
        {},
        playbackStatusUpdate
      );

      setSound(loadedSound);
    };

    loadSound();

    return () => {
      // UnLoad sound
      sound?.unloadAsync();
    };
  }, [soundURI]);

  const getDuration = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const playPauseSound = async () => {
    if (!sound) return;

    if (paused) {
      if (audioProgress === 0 || audioProgress === 1) {
        await sound.playFromPositionAsync(0);
      } else {
        await sound.playAsync();
      }
    } else {
      await sound.pauseAsync();
    }
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
