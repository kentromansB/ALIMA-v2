import React, { useState, useEffect } from "react";
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
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");



function AddQuestion({ currentUser, route, navigation }) {

  const [filteredDataSource, setFilteredDataSource] = useState("");
  const [masterDataSource, setMasterDataSource] = useState("");
  const [datalist, setDatalist] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      firebase
        .firestore()
        .collection("Questions")
        .get()
        .then((snapshot) => {
          let masterDataSource = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
  
          setDatalist(masterDataSource);
          setFilteredDataSource(masterDataSource);
          setMasterDataSource(masterDataSource);
          console.log(masterDataSource);
        });
    });
  
    return unsubscribe;
  }, [navigation]);
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bodycontainer}>
        <View style={{ marginVertical: 15 }}>
          <View>
            <Text style={[styles.text, { color: "#000000" }]}>
              Add a New Questions
            </Text>
          </View>
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text style={[styles.text, { fontSize: 16 }]}>Questions:</Text>
        
          <FlatList
        nestedScrollEnabled
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        horizontal={false}
        data={filteredDataSource}
        style={{ flex: 1 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.navigate("EditQuestion", { question: item.question })
              }
            >
              <View style={styles.bodycontainer}>
                <Text style={styles.inKagan}>{item.question} </Text>
              </View>
            </TouchableOpacity>
          );
        }}
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
            onPress={() => navigation.navigate("AddQuiz")}
          >
            <Text style={[styles.text, { fontSize: 16, color: "white" }]}>
              Add New Questions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}


export default connect()(AddQuestion);
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
