import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity,
    ScrollView,
    Touchable,
    SafeAreaView,
    StatusBar
   } from "react-native";

import { Dimensions } from "react-native";

const AboutFood = ({ navigation }) => {

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 1) / 1);
  const imageWidth = dimensions.width;

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
       <View style = {{paddingVertical:30}}>
          <Text style={styles.textKagan}>FOODS</Text>
            <Image
                      style={{ width: imageHeight, height: imageWidth }}
                      source={require("../../assets/1-food.jpg")}
            />
            <Text style={{paddingLeft:15}}>Credits from: TILAY DABAW! BYAHENGDO30</Text>
          
            <View style = {{paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.paragraph}>PANYAM AND PERIKAMBING. It is a significant
            snacks of the Kagan tribe. It is rice flour-based pancake snack, deep fried and served on special
            occasions, such as wedding or kanduli and every festivals in Eid. It is said that the
            Kagan elders cook panyam in a solemn manner and that they should not be disturbed
            while cooking or the perfect shape would not be attained. They also have the PERIKAMBING or
            their fried tundan bananas coated in sugar, and flour. </Text>
            </View>
        </View>

       



      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // paddingHorizontal: 40,
    //paddingVertical: 30,
    alignContent: "center",
  },
    scrollView: {
      
      marginHorizontal: 0,
      //paddingVertical: 30
    },
  header: {
    top: 40,
    left: 30,
  },

  paragraph:{
    flexDirection: "row",
    fontSize: 16,
    marginHorizontal: 10,
    paddingVertical:5,
    letterSpacing: 0.25,
    color: "black",
    alignSelf: "center",
    textAlign:"justify"
  },

  headline: {
    width: "78%",
    height: 200,
    backgroundColor: "#dadada",
    top: 70,
    left: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contextButton: {
    padding: 20,
    flexDirection: "row",
    left: 20,
    alignItems: "center",
  },
  text_Context: {
    flexDirection: "column",
    marginLeft: 30,
  },
  buttonVocab: {
    alignSelf: "center",
    alignItems: "flex-start",
    elevation: 0.7,
    width: '100%',
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
  },
  textKagan: {
    flexDirection: "row",
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical:5,
    letterSpacing: 0.25,
    color: "#8E2835",
    alignSelf: "center",
  },
  textHead: {
    flexDirection: "row",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  textSubHead: {
    flexDirection: "row",
    fontSize: 13,
    // fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "grey",
  },
  headLine: {
    top: 15,
    left: 10,
  },
  textHeadline: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  Kagan: {
    top: 20,
    left: 20,
    alignItems: "center",
  },
  grammar: {
    top: 10,
    left: 40,
  },
  pronun: {
    top: 40,
    left: 40,
  },
  shit: {
    top: 30,
  },
  shit1: {
    top: 60,
  },

  button: {
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

  buttonGrammar: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "78%",
    backgroundColor: "#dadada",
    top: 60,
    left: -40,
    height: 80,
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
    width: "78%",
    backgroundColor: "#dadada",
    top: 60,
    left: -40,
    height: 80,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },
  Vocab: {
    top: -20,
    left: 40,
  },
  VocabSub: {
    top: -22,
    left: 40,
  },
  textVocab: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  textVocabSub: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "grey",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});
