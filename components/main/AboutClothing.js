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

const AboutClothing = ({ navigation }) => {

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 1) / 1);
  const imageWidth = dimensions.width;

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
       <View style = {{paddingVertical:30}}>
          <Text style={styles.textKagan}>CLOTHING</Text>
            <Image
                      style={{ width: imageHeight, height: imageWidth }}
                      source={require("../../assets/1-men.jpg")}
            />
            <Text style={{paddingLeft:15}}>Credits from: My Cebu Photo Blog</Text>
          
            <View style = {{paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.paragraph}>"Men from the Kagan Tribe wearing their traditional garb - 
            dressed in a distinctive clothing of the Kagan Tribe." </Text>

            </View>
        </View>

        <View style = {{paddingVertical:5}}>
          
            <Image
                      style={{ width: imageHeight, height: imageWidth }}
                      source={require("../../assets/1-clothewoman.jpg")}
                      accessibility={true}
                      accessibilityLabel="Kagan Clothing"
            />
            <Text style={{paddingLeft:15}}>Credits from: My Cebu Photo Blog</Text>
          
            <View style = {{paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.paragraph}>"A woman from the Kagan Tribe wearing their traditional garb - 
            dressed in a distinctive clothing of the Kagan Tribe during the Kadayawan sa Dabaw 2017 "</Text>

            </View>
        </View>

        <View style = {{paddingVertical:5}}>
          
            <Image
                      style={{ width: imageHeight, height: imageWidth }}
                      source={require("../../assets/1-binubay.jpg")}
                      accessibility={true}
                      accessibilityLabel="Kagan Clothing"
            />
            <Text style={{paddingLeft:15}}>Credits from: Bai Halila Sudagar</Text>
          
            <View style = {{paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.paragraph}>BINUBAY - a blouse or a clothing of any color, usually bright colors, 
            worn by Kagan women. Instead of using buttons, this unique clothing uses safety pins. </Text>

            </View>
        </View>

        <View style = {{paddingVertical:5}}>
          
            <Image
                      style={{ width: imageHeight, height: imageWidth }}
                      source={require("../../assets/1-dagmay.jpg")}
                      accessibility={true}
                      accessibilityLabel="Kagan Clothing"
            />
            <Text style={{paddingLeft:15}}>Credits from: Bai Halila Sudagar</Text>
          
            <View style = {{paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.paragraph}>DAGMAY, a tube skirt or  a traditional garment
             made of handwoven (Yabuwan) multi-colored cloth used by Kagan women. </Text>

            </View>
        </View>

        <View style = {{paddingVertical:5}}>
          
            <Image
                      style={{ width: imageHeight, height: imageWidth }}
                      source={require("../../assets/1-mosa.jpg")}
                      accessibility={true}
                      accessibilityLabel="Kagan Clothing"
            />
            <Text style={{paddingLeft:15}}>Credits from: Bai Halila Sudagar</Text>
          
            <View style = {{paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.paragraph}>MOSA, a head scarf or a head garment usually
             worn by Kagan men as a recognition of social or cultural distinction. 
             The head scarf is usually styled as Pinarot (instead of knotting at 
             the back of the head, it is knotted at the front) and also made by 
             weaving (Yabuwan).
 </Text>

            </View>
        </View>

        <View style = {{paddingVertical:5}}>
          
            <Image
                      style={{ width: imageHeight, height: imageWidth }}
                      source={require("../../assets/1-sawwa.jpg")}
                      accessibility={true}
                      accessibilityLabel="Kagan Clothing"
            />
            <Text style={{paddingLeft:15}}>Credits from: Bai Halila Sudagar</Text>
          
            <View style = {{paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.paragraph}>SAWWA,  a fine clothing worn from the waist 
            down to the ankles, covering both the legs separately. The trousers 
            of Kagan men do not use garters, instead, it uses cord-like cloth to tighten it. 
            Also, it is designed as slim-fit at the lower part, from the knee to the ankle. </Text>

            </View>
        </View>

        <View style = {{paddingVertical:5}}>
          
            <Image
                      style={{ width: imageHeight, height: imageWidth }}
                      source={require("../../assets/1-siniban.jpg")}
                      accessibility={true}
                      accessibilityLabel="Kagan Clothing"
            />
            <Text style={{paddingLeft:15}}>Credits from: Bai Halila Sudagar</Text>
          
            <View style = {{paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.paragraph}>SINIBAN, a clothing of any color worn by 
            the Kagan men, usually loosely made so that it is comfortable to wear.
 </Text>

            </View>
        </View>

        <View style = {{paddingVertical:5}}>
          
            <Image
                      style={{ width: imageHeight, height: imageWidth }}
                      source={require("../../assets/1-todong.jpg")}
                      accessibility={true}
                      accessibilityLabel="Kagan Clothing"
            />
            <Text style={{paddingLeft:15}}>Credits from: Bai Halila Sudagar</Text>
          
            <View style = {{paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.paragraph}>TONDONG, a piece of fine material used 
            by Kagan women to cover their head as a symbol of modesty and privacy. 
            What is distinct in this particular type of veil is that it is 
            designed with “Barabudde”, meaning, it is designed with rectangular 
            shapes having different colors on the edge part of the veil.
 </Text>

            </View>
        </View>




      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutClothing;

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
