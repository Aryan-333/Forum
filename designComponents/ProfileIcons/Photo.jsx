import { StyleSheet, View } from "react-native";
import { PhotoImage } from "./PhotoImage";

export const PhotoSize = {
  $8: "$8",
  $12: "$12",
  $16: "$16",
  $18: "$18",
  $20: "$20",
  $24: "$24",
  $32: "$32",
  $36: "$36",
  $40: "$40",
  $48: "$48",
  $52: "$52",
  $60: "$60",
  $72: "$72",
  $80: "$80",
  $120: "$120",
  $175: "$175",
};

export function Photo({ size }) {
  const classes = {
    content: [
      styles.content,
      size === PhotoSize.$175 && styles.contentSize175,
      size === PhotoSize.$120 && styles.contentSize120,
      size === PhotoSize.$80 && styles.contentSize80,
      size === PhotoSize.$72 && styles.contentSize72,
      size === PhotoSize.$60 && styles.contentSize60,
      size === PhotoSize.$52 && styles.contentSize52,
      size === PhotoSize.$48 && styles.contentSize48,
      size === PhotoSize.$40 && styles.contentSize40,
      size === PhotoSize.$36 && styles.contentSize36,
      size === PhotoSize.$32 && styles.contentSize32,
      size === PhotoSize.$24 && styles.contentSize24,
      size === PhotoSize.$20 && styles.contentSize20,
      size === PhotoSize.$18 && styles.contentSize18,
      size === PhotoSize.$16 && styles.contentSize16,
      size === PhotoSize.$12 && styles.contentSize12,
    ],
  };

  return (
    <View style={styles.root}>
      <View style={classes.content}>
        <PhotoImage person="Michael" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    display: "inline-flex",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  content: {
    width: 8,
    height: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  contentSize12: {
    justifyContent: "unset",
    alignItems: "unset",
    flexDirection: "unset",
    width: 12,
    height: 12,
  },
  contentSize16: {
    width: 16,
    height: 16,
  },
  contentSize18: {
    width: 18,
    height: 18,
  },
  contentSize20: {
    width: 20,
    height: 20,
  },
  contentSize24: {
    justifyContent: "unset",
    alignItems: "unset",
    flexDirection: "unset",
    width: 24,
    height: 24,
  },
  contentSize32: {
    width: 32,
    height: 32,
  },
  contentSize36: {
    width: 36,
    height: 36,
  },
  contentSize40: {
    width: 40,
    height: 40,
  },
  contentSize48: {
    width: 48,
    height: 48,
  },
  contentSize52: {
    justifyContent: "unset",
    alignItems: "unset",
    flexDirection: "unset",
    width: 52,
    height: 52,
  },
  contentSize60: {
    width: 60,
    height: 60,
  },
  contentSize72: {
    justifyContent: "unset",
    alignItems: "unset",
    flexDirection: "unset",
    width: 72,
    height: 72,
  },
  contentSize80: {
    width: 80,
    height: 80,
  },
  contentSize120: {
    width: 120,
    height: 120,
  },
  contentSize175: {
    width: 175,
    height: 175,
  },
});
