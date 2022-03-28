import React, { useState } from "react";
import { View, 
        TextInput, 
        Image, 
        Button, 
        TouchableOpacity, 
        Text,
        StyleSheet, 
        Pressable
       } from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationEvents } from "react-navigation";


function newDReview({ currentUser, route, navigation }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("");
  

  const savePostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .add({
        downloadURL,
        caption,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };
  const saveAllPostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("postsAll")
      .add({
        username: currentUser.name,
        downloadURL,
        caption,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        navigation.popToTop();
      });
  };

   return (
      <View style={styles.container}>
      
      <View>
      <View style={styles.headLine}>
        <View style={styles.header_line}>
          <Text style={styles.textHead}> AiMBABAKi</Text>
          <Text style={styles.textSubHead}> /aim.ba.ba.'ki/</Text>
        </View>


        <Pressable
          style={styles.buttonAudio}
          onPress={() => navigation.navigate("Vocabulary")}
        >
          <View>
            <MaterialCommunityIcons
              name="volume-high"
              size={26}
              color="white"
            />
          </View>
        </Pressable>
      </View>

      <View style={styles.Kagan}>
            
            <Text style={styles.textVocabSubSub}> Feeling or showing pleasure or contentment.
            </Text>
            <Text style={styles.textVocabSub}>
              "Melissa came in looking happy and excited"
            </Text>
      </View>
    </View>
      {/* <Pressable style = {styles.button} onPress={() => navigation.navigate('Save')}> */}
      <Pressable style = {styles.button} >
          <Text style = {styles.subtitle}>Done</Text>
      </Pressable>
    </View>
    
  );
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(newDReview);
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    top: 10,
    //left: 40,
  },
  headLine: {
    flexDirection: "column",
    padding: 30,
    top: -20,
    height: 150,
    //backgroundColor: "#8E2835",
    alignItems:"center",
    justifyContent: "center",

  },
  
  header_line: {
    flexDirection: "column",
    alignItems:"center",

  },

  textHead: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    position:"relative",
    alignSelf: "center",
  },

  textSubHead: {
    flexDirection: "row",
    fontSize: 13,
    letterSpacing: 0.25,
  },
  buttonAudio: {
    alignSelf: "center",
    padding: 8,
    margin: 10,
     borderRadius: 7,
     backgroundColor: "#79222D",
  },
  Kagan: {
    justifyContent:"flex-start",
    top: 20,
    left: 40,
  },
  textVocab: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  textVocabSub: {
    fontSize: 11,
    marginTop: 5,
    letterSpacing: 0.25,
    color: "#8E2835",
    paddingLeft: 15,
  },
  textVocabSubSub: {
    fontSize: 13,
    letterSpacing: 0.25,
    color: "#000000",
    marginTop:5,
  },
  subtitle: {
    alignSelf: "center",
    fontSize:18,
    
    letterSpacing: 0.25,
    color: "white",
  },
  button:{
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 1,
    width: "90%",
    backgroundColor: "#8E2835",
    //top: 130,
    marginTop: 50,
  },
  guidelines:{
    fontSize: 12,
    fontStyle:"italic",
    color:"#707070",
  },

  bottom: {
    marginBottom: 20,
  },

  center:{
    justifyContent:"center",
    alignContent:"center",
  },

  paddingLeft:{
    
    alignContent:"flex-start",
    // padding:15,
    // paddingRight:5,
     marginTop:20,
     paddingLeft:20,
    
  },

  title_text:{
    //alignContent:"flex-start",
    fontWeight:"bold",
    fontSize:17,
  },
  text_input:{
    alignSelf: "flex-start",
    paddingLeft: 12,
    paddingTop: 10,
  },
  input: {
    letterSpacing: 0.25,
    height: 50,
    width: "95%",
    paddingLeft: 12,
    paddingTop: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',

  },
  tags_input: {
    letterSpacing: 0.25,
    height: 80,
    width: "95%",
    paddingLeft: 12,
    paddingTop: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',

  },
  description_input: {
    letterSpacing: 0.25,
    height: 100,
    width: "95%",
    paddingLeft: 12,
    paddingTop: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',

  },

})
