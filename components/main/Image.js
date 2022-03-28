import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  FlatList,
  RefreshControl,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddButton from "./AddButton";

import { Dimensions } from "react-native";

import SeeMore from "react-native-see-more-inline";
import { TouchableOpacity } from "react-native-gesture-handler";

function Image({ navigation }) {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 1) / 1);
  const imageWidth = dimensions.width;

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      <Image
        style={{ height: imageWidth, width: imageWidth }}
        source={{ uri: item.downloadURL }}
      />
    </View>
    //no button stylesheet
    // <FlatList
    //   nestedScrollEnabled
    //   numColumns={1}
    //   horizontal={false}
    //   data={posts}
    //   style={{ flex: 1 }}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }
    //   renderItem={({ item }) => (
    //     <View style={styles.container}>
    //       <TouchableOpacity>
    //       <Image
    //         style={{  height: imageWidth, width: imageWidth }}
    //         source={{ uri: item.downloadURL }}
    //       />
    //       <SeeMore
    //           numberOfLines={2}
    //           style={styles.textVocab}> "{item.caption}"
    //       </SeeMore>
    //       </TouchableOpacity>

    //     </View>
    //   )}
    // />
  );
}

export default Image;

const styles = StyleSheet.create({
  title: {
    top: 20,
    left: 10,
  },
  container: {
    paddingTop: 20,
    justifyContent: "flex-start",

    marginBottom: 20,
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#F02A4B",
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
    backgroundColor: "#8E2835",
  },

  textHead: {
    flexDirection: "row",
    fontSize: 21,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  textSubHead: {
    flexDirection: "row",
    fontSize: 15,
    // fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  headLine: {
    flexDirection: "row",
    width: "100%",
    height: 110,
    backgroundColor: "#8E2835",
  },
  textHeadline: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  searchBar: {
    top: 40,
    left: -120,
    width: "100%",
  },
  Kagan: {
    top: 90,
    left: 40,
  },
  grammar: {
    top: 70,
    left: 40,
  },
  pronun: {
    top: 100,
    left: 40,
  },
  textKagan: {
    flexDirection: "row",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  Abutton: {
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 150,
    top: -120,
    backgroundColor: "#8E2835",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonVocab: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "90%",
    backgroundColor: "#dadada",
    top: -70,
    left: -40,
    height: 280,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },
  buttonGrammar: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "90%",
    backgroundColor: "#dadada",
    top: -30,
    left: -40,
    height: 300,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },
  buttonPronun: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "90%",
    backgroundColor: "#dadada",
    top: -40,
    left: -40,
    height: 105,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },
  Vocab: {
    top: 10,
    left: -20,
    paddingBottom: 20,
  },
  VocabSubSub: {
    top: 5,
    left: -10,
  },
  VocabSub: {
    top: 5,
    left: -10,
  },
  textVocab: {
    fontSize: 18,
    margin: 10,
    //fontWeight: "bold",
    //lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    //alignContent:"flex-start",
  },
  textVocabSub: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  textVocabSubSub: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "#8E2835",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    height: 45,
    width: "90%",
    backgroundColor: "white",
    margin: 12,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonAudio: {
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 3,
    width: 50,
    backgroundColor: "#79222D",
    top: 300,
    left: 130,
    height: 50,
    borderColor: "black",
  },
  Icon: {
    left: 7,
  },
});
