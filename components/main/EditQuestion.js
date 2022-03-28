import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");

function EditQuestion({route}) {

    const {question} = route.params;
    console.log(question)


    const [choice, setChoice] = useState("")
    const [choice2, setChoice2] = useState("")
    const [choice3, setChoice3] = useState("")
    const [choice4, setChoice4] = useState("")
    const [answer, setAnswer] = useState("")


    const editData = () => {
        firebase
        .firestore()
        .collection('Questions')
        .doc(question)
        .update({
        choice,
        choice1,
        choice2,
        choice3,
        choice4
      })
      .then(() => {
        console.log('Added!');
      });
      };
    
      const onSubmit = () => {
        editData();
      };
    


  return (
    <ScrollView style={styles.container}>
      <View style={styles.bodycontainer}>
        <View style={{ marginVertical: 15 }}>
          <View>
            <Text style={[styles.text, { color: "#000000" }]}>
              New Choices
            </Text>
          </View>
        </View>
        <View>
          <Text style={[styles.text, { fontSize: 16 }]}>
            Add New Choices
          </Text>
          <TextInput
            style={styles.input}
            multiline={true}
            autoCapitalize="none"
            onChangeText={(choice) => setChoice(choice)}
          />

        <TextInput
            style={styles.input}
            multiline={true}
            autoCapitalize="none"
            onChangeText={(choice2) => setChoice2(choice2)}
          />

        <TextInput
            style={styles.input}
            multiline={true}
            autoCapitalize="none"
            onChangeText={(choice3) => setChoice3(choice3)}
          />

        <TextInput
            style={styles.input}
            multiline={true}
            autoCapitalize="none"
            onChangeText={(choice4) => setChoice4(choice4)}
          />
        </View>

        <View>
          <Text style={[styles.text, { fontSize: 16 }]}>
            Add Correct Answer
          </Text>
          <TextInput
            style={styles.input}
            multiline={true}
            autoCapitalize="none"
            onChangeText={(answer) => setAnswer(answer)}
          />
          </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            marginVertical: 25,
          }}
        >
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#bfa42a" }]}
            
          >
            <Text style={[styles.text, { fontSize: 16, color: "white" }]} onPress={() => onSubmit()}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default EditQuestion;
const styles = StyleSheet.create({
    container: {
      alignContent: "center",
      top: 1,
      paddingVertical: 15,
      paddingHorizontal: 20,
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
      borderColor: "#707070",
    },
    text: {
      fontWeight: "bold",
      fontSize: 20,
      letterSpacing: 0.5,
    },
    bodycontainer: {
      paddingVertical: 5,
      paddingHorizontal: 15,
    },
    addButton: {
      borderColor: "#70707033",
      borderWidth: 1.5,
      marginVertical: 10,
      borderRadius: 7,
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      flex: 1,
      borderRadius: 5,
      alignItems: "center",
      paddingVertical: 15,
    },
  });
  