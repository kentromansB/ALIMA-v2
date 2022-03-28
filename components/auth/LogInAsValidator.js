import React, { Component } from "react";
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

import Svg, {Path, G, Rect, Polygon, Title} from 'react-native-svg';

import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");

export default class LogInAsValidator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.bottom}>
              <Text style={styles.welcome}>Welcome to KAAG,</Text>
              <Text style={styles.subtitle}>Create account to get started!</Text>
          </View>
          <View style={styles.loginGroup}>
          <Text style={styles.textGrey}>Name</Text>
              <TextInput
              onChangeText={(name) => this.setState({ name })}
              style={styles.input}
              />
              <Text style={styles.textGrey}>Email</Text>
              <TextInput
                
                onChangeText={(email) => this.setState({ email })}
                style={styles.input}
              />
              <Text style={styles.textGrey}>Password</Text>
              <TextInput
                
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
                style={styles.input}
              />
               <Text style={styles.textMini}>Forgot password?</Text>
           </View>
           
           <Pressable style={styles.button} onPress={() => this.onSignUp()}>
              <Text style={styles.text}>Login</Text>
           </Pressable>
           <Pressable style={styles.buttonGoogle} onPress={() => this.onSignUp()}>
                  <Svg id="search" xmlns="http://www.w3.org/2000/svg" width="22.845" height="22.845" viewBox="0 0 22.845 22.845">
                    <Path id="Path_382" data-name="Path 382" d="M5.063,145.9l-.8,2.969-2.906.061a11.442,11.442,0,0,1-.084-10.666h0l2.588.474L5,141.314a6.817,6.817,0,0,0,.064,4.59Z" transform="translate(0 -132.099)" fill="#fbbb00"/>
                    <Path id="Path_383" data-name="Path 383" d="M272.6,208.176a11.418,11.418,0,0,1-4.072,11.041h0l-3.259-.166-.461-2.879a6.808,6.808,0,0,0,2.929-3.476h-6.108v-4.519H272.6Z" transform="translate(-249.954 -198.887)" fill="#518ef8"/>
                    <Path id="Path_384" data-name="Path 384" d="M47.72,315.933h0a11.426,11.426,0,0,1-17.212-3.495l3.7-3.03A6.793,6.793,0,0,0,44,312.887Z" transform="translate(-29.148 -295.604)" fill="#28b446"/>
                    <Path id="Path_385" data-name="Path 385" d="M46.06,2.63l-3.7,3.029A6.792,6.792,0,0,0,32.346,9.216L28.625,6.169h0A11.425,11.425,0,0,1,46.06,2.63Z" transform="translate(-27.347)" fill="#f14336"/>
                  </Svg>
            <Text style={styles.textGoogle}> 
                
                    Connect with Google </Text>
         </Pressable>
         <View style={styles.signInGroup}>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
            <Text>
                I'm already a member {" "}. <Text style={styles.textSignUp}>Sign In</Text>
             </Text>
           </TouchableOpacity>
         </View>
        </View>
      </View>
      
    );
  }
}

// export function Landing({ navigation }) {
//   return (

//   );
// }

const styles = StyleSheet.create({
  banner: {
    //flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 70,
    left: 40,
  },
  bottom: {
    
    bottom: 20,
    marginBottom: 45,
  },
  loginGroup: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 100,
    //left: 30,
  },
  miniGroup: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 200,
    left: 240,
  },
  signInGroup: {
    flex: 1,
    //alignItems:"center",
    alignContent: "center",
    justifyContent: "center",
    top:175,
    //top: 300,
    left: 70,
  },
  welcome: {
    // flex: 1,
    // left: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    // flex: 1,
    // left: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "grey",
  },
  button: {
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 1,
    width: "80%",
    backgroundColor: "#8E2835",
    top: 155,
  },
  buttonGoogle: {
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 1,
    width: "80%",
    backgroundColor: "#dadada",
    top: 165,
    
  },
  text: {
    alignSelf: "center",
    fontSize:18,
    
    letterSpacing: 0.25,
    color: "white",
  },
  logo: {
    width: 16,
    height: 16,
    right: 10,
  },
  textGoogle: {
    alignSelf: "center",
    paddingLeft:40,
    paddingTop:15,
    fontSize: 18,
    
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    position:"absolute",
    
  },
  textGrey: {
    fontSize: 15,
    color: "grey",
    //fontWeight: "bold",
    //left: 50,
  },
  textMini: {
    fontSize: 12,
    color: "gray",
    fontWeight: "bold",
    left: 200,
  },
  textSignUp: {
    fontSize: 14,
    color: "#8E2835",
    fontWeight: "bold",
    left: 200,
  },
  input: {
    height: 45,
    width: "80%",
    marginTop: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingLeft: 10,
  },
});

//       <View>
//         <View style={styles.banner}>
//           <Text style={styles.welcome}>Create Account,</Text>
//           <Text style={styles.subtitle}>Sign up to get started!</Text>
//         </View>
//         <View style={styles.loginGroup}>
//           <Text style={styles.textGrey}>Name</Text>
//           <TextInput
//             onChangeText={(name) => this.setState({ name })}
//             style={styles.input}
//           />
//           <Text style={styles.textGrey}>Email</Text>
//           <TextInput
//             onChangeText={(email) => this.setState({ email })}
//             style={styles.input}
//           />
//           <Text style={styles.textGrey}>Password</Text>
//           <TextInput
//             secureTextEntry={true}
//             onChangeText={(password) => this.setState({ password })}
//             style={styles.input}
//           />
//         </View>
//         <Pressable style={styles.button} onPress={() => this.onSignUp()}>
//           <Text style={styles.text}>Login</Text>
//         </Pressable>
//         <Pressable style={styles.buttonGoogle} onPress={() => this.onSignUp()}>
//           <Text style={styles.textGoogle}>
//             <Image
//               style={styles.logo}
//               source={require("../../assets/Google.svg")}
//             />
//             Connect with Google
//           </Text>
//         </Pressable>
//         <View>
//           <TouchableOpacity
//             onPress={() => navigation.navigate("RegisterScreen")}
//             style={styles.signInGroup}
//           >
//             <Text>
//               I'm already a member{" "}
//               <Text style={styles.textSignUp}>Sign In</Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   banner: {
//     flex: 1,
//     top: 100,
//     left: 40,
//   },
//   loginGroup: {
//     flex: 1,
//     top: 150,
//     left: 30,
//   },
//   signInGroup: {
//     flex: 1,

//     top: 275,
//     left: 90,
//   },
//   welcome: {
//     flex: 1,
//     left: 20,
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     flex: 1,
//     left: 20,
//     fontSize: 25,
//     fontWeight: "bold",
//     color: "grey",
//   },
//   button: {
//     alignSelf: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     width: "80%",
//     backgroundColor: "#8E2835",
//     top: 200,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
//   buttonGoogle: {
//     alignSelf: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     width: "80%",
//     backgroundColor: "#dadada",
//     top: 215,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//     borderColor: "black",
//   },
//   text: {
//     alignSelf: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//     lineHeight: 21,
//     letterSpacing: 0.25,
//     color: "white",
//   },
//   logo: {
//     width: 16,
//     height: 16,
//     right: 10,
//   },
//   textGoogle: {
//     alignSelf: "center",
//     fontSize: 16,
//     fontWeight: "bold",
//     lineHeight: 21,
//     letterSpacing: 0.25,
//     color: "black",
//   },
//   textGrey: {
//     fontSize: 15,
//     color: "grey",
//     fontWeight: "bold",
//     left: 50,
//   },
//   textMini: {
//     fontSize: 12,
//     color: "black",
//     fontWeight: "bold",
//     left: 200,
//   },
//   textSignUp: {
//     fontSize: 14,
//     color: "#8E2835",
//     fontWeight: "bold",
//     left: 200,
//   },
//   input: {
//     height: 45,
//     width: "80%",
//     margin: 12,
//     borderWidth: 1,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
// });
