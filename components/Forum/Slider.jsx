import React, { useRef, useState } from "react";
import { FlatList, View, Dimensions, Image } from "react-native";
import styles from "./Slider.style";

const data = [
  {
    id: "123",
    thumbnail: "https://avatars.githubusercontent.com/u/84247444?v=4",
  },
  {
    id: "1234",
    thumbnail: "https://avatars.githubusercontent.com/u/84233344?v=4",
  },
  {
    id: "12345",
    thumbnail: "https://avatars.githubusercontent.com/u/84247333?v=4",
  },
  {
    id: "123545",
    thumbnail: "https://avatars.githubusercontent.com/u/77777777?v=4",
  },
];

const width = Dimensions.get("window").width - 20;

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    const currentSlideIndex = viewableItems[0]?.index || 0;
    setActiveSlideIndex(currentSlideIndex);
  });

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  return (
    <View style={styles.container1}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id + index}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.thumbnail }}
              style={{
                width,
                height: width / 1.7,
                borderRadius: 7,
              }}
            />
          </View>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <View style={styles.indicatorContainer}>
          {data.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    activeSlideIndex === index ? "white" : "grey",
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Slider;
