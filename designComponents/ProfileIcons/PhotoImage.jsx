import { StyleSheet, View, Image } from "react-native";
import theme from "./theme";

const PhotoImagePerson = {
  Michael: require("../../assets/images/profile/Michael.jpeg"),
  Adam: "Adam",
  Rcox: "Rcox",
  Jbrill: "Jbrill",
  Ud: "UD",
  Generic: "Generic",
  Pete: "Pete",
  Pablo: "Pablo",
  Lalo: "Lalo",
  Spokken: "Spokken",
};

export function PhotoImage(props) {
  const classes = {
    root: [
      styles.root,
      props.person === PhotoImagePerson.Michael && styles.rootPersonSpokken,
      props.person === PhotoImagePerson.Spokken && styles.rootPersonSpokken,
      props.person === PhotoImagePerson.Lalo && styles.rootPersonLalo,
      props.person === PhotoImagePerson.Pablo && styles.rootPersonPablo,
      props.person === PhotoImagePerson.Pete && styles.rootPersonPete,
      props.person === PhotoImagePerson.Generic && styles.rootPersonGeneric,
      props.person === PhotoImagePerson.Ud && styles.rootPersonUd,
      props.person === PhotoImagePerson.Jbrill && styles.rootPersonJbrill,
      props.person === PhotoImagePerson.Rcox && styles.rootPersonRcox,
      props.person === PhotoImagePerson.Adam && styles.rootPersonAdam,
    ],
    image: [
      styles.image,
      props.person === PhotoImagePerson.Michael && styles.imagePersonSpokken,
      props.person === PhotoImagePerson.Spokken && styles.imagePersonSpokken,
      props.person === PhotoImagePerson.Lalo && styles.imagePersonLalo,
      props.person === PhotoImagePerson.Pablo && styles.imagePersonPablo,
      props.person === PhotoImagePerson.Pete && styles.imagePersonPete,
      props.person === PhotoImagePerson.Generic && styles.imagePersonGeneric,
      props.person === PhotoImagePerson.Ud && styles.imagePersonUd,
      props.person === PhotoImagePerson.Jbrill && styles.imagePersonJbrill,
      props.person === PhotoImagePerson.Rcox && styles.imagePersonRcox,
      props.person === PhotoImagePerson.Adam && styles.imagePersonAdam,
    ],
  };

  return (
    <View style={classes.root}>
      <Image source={PhotoImagePerson.Michael}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 24,
    height: 24,
    flexShrink: 0,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    borderStyle: "solid",
    borderRadius: 2000,
  },
  rootPersonAdam: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rootPersonRcox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rootPersonJbrill: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rootPersonUd: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rootPersonGeneric: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rootPersonPete: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rootPersonPablo: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rootPersonLalo: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rootPersonSpokken: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
});
