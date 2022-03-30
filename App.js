import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase/app";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
// import { LogBox } from "react-native";
// import _ from "lodash";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// LogBox.ignoreLogs(["Warning:..."]); // ignore specific logs
// LogBox.ignoreAllLogs(); // ignore all logs
// const _console = _.clone(console);
// console.warn = (message) => {
//   if (message.indexOf("Setting a timer") <= -1) {
//     _console.warn(message);
//   }
// };
const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
  apiKey: "AIzaSyAHGEUMnTu_5XeqWK2SIz_4w5icJEvxZrA",
  authDomain: "minna-47e79.firebaseapp.com",
  projectId: "minna-47e79",
  storageBucket: "minna-47e79.appspot.com",
  messagingSenderId: "162831823788",
  appId: "1:162831823788:web:c442ab1485f72e4fccc009",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import LandingScreen from "./components/auth/Landing";
import LanguageScreen from "./components/main/Language";
import RegisterScreen from "./components/auth/Register";
import ForgotPasswordScreen from "./components/auth/ForgotPassword";
import LoginScreen from "./components/auth/Login";
import MainScreen from "./components/Main";
import Landing from "./components/auth/Landing";
import ContributionScreen from "./components/main/Contribution";
import VocabularyScreen from "./components/main/Vocabulary";
import GrammarScreen from "./components/main/Grammar";
import WordScreen from "./components/main/Word";
import SaveScreen from "./components/main/Save";
import NewDictionaryScreen from "./components/main/NewDictionary";
import Vocabulary1Screen from "./components/main/coursepacks/screens/Vocabulary/Vocabulary1";
import Vocabulary2Screen from "./components/main/coursepacks/screens/Vocabulary/Vocabulary2";
import Vocabulary3Screen from "./components/main/coursepacks/screens/Vocabulary/Vocabulary3";
import Vocabulary4Screen from "./components/main/coursepacks/screens/Vocabulary/Vocabulary4";
import newDReviewScreen from "./components/main/newDReview";
import MyContributionsScreen from "./components/main/userContributions/MyContributions";
import BeAValidatorScreen from "./components/main/BeAValidator";
import ValidatorAppScreen from "./components/main/ValidatorApplication";
import ValidationScreen from "./components/main/Validation";
import ValidateWordScreen from "./components/main/wordValidation/ValidateWord";
import DeclineScreen from "./components/main/Decline";
import ApplicationsScreen from "./components/main/userValidation/Applications";
import ApplicationConfScreen from "./components/main/ApplicationConf";
import SpeechScreen from "./components/main/Speech";
// import SpeechScreen1 from "./components/main/coursepacks/screens/Speech/Speech1";
import UserContributionScreen from "./components/main/UserContribution";
import PronunciationScreen from "./components/main/coursepacks/screens/Speech/Pronunciation";
import Pronunciation2Screen from "./components/main/coursepacks/screens/Speech/Pronunciation2";
import Pronunciation3Screen from "./components/main/coursepacks/screens/Speech/Pronunciation3";
import Pronunciation4Screen from "./components/main/coursepacks/screens/Speech/Pronunciation4";
import PhrasesScreen1 from "./components/main/coursepacks/screens/Phrases/Phrases1";
import PhrasesScreen2 from "./components/main/coursepacks/screens/Phrases/Phrases2";
import PhrasesScreen3 from "./components/main/coursepacks/screens/Phrases/Phrases3";
import CultureScreen from "./components/main/AboutCulture";
import FoodScreen from "./components/main/AboutFood";
import EventsScreen from "./components/main/AboutEvents";
import TraditionScreen from "./components/main/Traditions";
import ClothingScreen from "./components/main/AboutClothing";
import AddLanguageScreen from "./components/main/AddLanguage";
import AddQuiz from "./components/main/AddQuiz";
import AddQuestion from "./components/main/AddQuestion";
import EditQuestion from "./components/main/EditQuestion";

const Stack = createStackNavigator();

// import { LogBox } from "react-native";

// LogBox.ignoreLogs(["Setting a timer"]);
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return <View style={{ flex: 1, justifyContent: "center" }}></View>;
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerShadowVisible: false,
                headerTintColor: "#ffffff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{
                title: "Forgot Password",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShadowVisible: false,
                headerTintColor: "#ffffff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  borderBottomWidth: 0,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Language">
            <Stack.Screen
              name="Language"
              component={LanguageScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MainContribution"
              component={ContributionScreen}
              navigation={this.props.navigation}
              options={{
                title: "New Post",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />
            <Stack.Screen
              name="Vocabulary"
              component={VocabularyScreen}
              options={{
                title: "Vocabulary",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />
            <Stack.Screen
              name="Speech"
              component={SpeechScreen}
              options={{
                title: "Speech",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="Grammar"
              component={GrammarScreen}
              options={{
                title: "Phrases",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />
            <Stack.Screen
              name="Word"
              component={WordScreen}
              options={{
                title: "",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="Culture"
              component={CultureScreen}
              options={{
                title: " ",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="Food"
              component={FoodScreen}
              options={{
                title: " ",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="Event"
              component={EventsScreen}
              options={{
                title: " ",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="Clothing"
              component={ClothingScreen}
              options={{
                title: " ",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="Traditions"
              component={TraditionScreen}
              options={{
                title: " ",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="NewWord"
              component={newDReviewScreen}
              options={{
                title: "",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="Save"
              component={SaveScreen}
              navigation={this.props.navigation}
              options={{
                title: "New Post",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
                //           headerRight:() => (
                //             <TouchableOpacity title="Save" onPress={() => uploadImage()}>
                //               <Text>Share</Text>
                // {/* <MaterialCommunityIcons name="camera-party-mode" color="#ffffff" size={32} /> */}
                //   </TouchableOpacity>
                //           )
              }}
            />
            <Stack.Screen
              name="NewDictionary"
              component={NewDictionaryScreen}
              navigation={this.props.navigation}
              options={{
                title: "Upload a Word",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />
            <Stack.Screen
              name="Vocabulary1"
              component={Vocabulary1Screen}
              options={{
                title: "Pronouns",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Vocabulary2"
              component={Vocabulary2Screen}
              options={{
                title: "Adjective",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Vocabulary3"
              component={Vocabulary3Screen}
              options={{
                title: "Verbs",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Vocabulary4"
              component={Vocabulary4Screen}
              options={{
                title: "Conjuctions & Prepositions",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="MyContribution"
              component={MyContributionsScreen}
              options={{
                title: "My Contributions",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="Validate"
              component={ValidateWordScreen}
              options={{
                title: "Validate Submissions",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Validation"
              component={ValidationScreen}
              options={{
                title: "Validation",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="ConfirmScreen"
              component={ApplicationConfScreen}
              options={{
                title: "Validator Confirmation",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="ApplicationScreen"
              component={ApplicationsScreen}
              options={{
                title: "Validator Applicants",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="Decline"
              component={DeclineScreen}
              options={{
                title: "Decline",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="ValidatorScreen"
              component={BeAValidatorScreen}
              options={{
                title: "Be A Validator",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="ValAppScreen"
              component={ValidatorAppScreen}
              options={{
                title: "Validator Application",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="UserContribution"
              component={UserContributionScreen}
              options={{
                title: "My Contribution",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Pronunciation1"
              component={PronunciationScreen}
              options={{
                title: "Pronunciation",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Pronunciation2"
              component={Pronunciation2Screen}
              options={{
                title: "Pronunciation",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Pronunciation3"
              component={Pronunciation3Screen}
              options={{
                title: "Pronunciation",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Pronunciation4"
              component={Pronunciation4Screen}
              options={{
                title: "Pronunciation",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            {/* <Stack.Screen
              name="Speach1"
              component={SpeechScreen1}
              options={{
                title: "Introduction",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            /> */}

            <Stack.Screen
              name="Phrases1"
              component={PhrasesScreen1}
              options={{
                title: "Greetings",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Phrases2"
              component={PhrasesScreen2}
              options={{
                title: "Introduction",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Phrases3"
              component={PhrasesScreen3}
              options={{
                title: "Conversation",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="AddLanguageScreen"
              component={AddLanguageScreen}
              options={{
                title: "Add Language",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="AddQuestion"
              component={AddQuestion}
              options={{
                title: "Questions",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="AddQuiz"
              component={AddQuiz}
              options={{
                title: "AddQuiz",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="EditQuestion"
              component={EditQuestion}
              options={{
                title: "EditQuestion",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  capture: {
    //position: "relative",
    //bottom: 100,
    right: 10,
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#263238",
    borderWidth: 6,
    alignSelf: "center",
  },
});
