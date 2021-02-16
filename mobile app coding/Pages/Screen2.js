import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image
} from "react-native";
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import Constants from 'expo-constants';


export default class Screen2 extends Component{

  
    timestamp = async() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    var fulldate = date + '/' + month + '/' + year;
  };
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then(function(result) {
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
                   })
                   firebase
                  .database()
                  .ref('/users/' + result.user.uid + '/date' )
                  .update({
                    last_logged_in: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
                  });
                  firebase
                   .database()
                    .ref('/users')
                      .update({
                        currentUser : result.user.uid
                        });
                  
              } else {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid  )
                  .update({
                    last_logged_in: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
                  });
                  firebase
                   .database()
                    .ref('/users')
                      .update({
                        currentUser : result.user.uid
                  }); 
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  }
  signInWithGoogleAsync =async() => {
  try {
    const result = await Google.logInAsync({
      behavior:'web',
      iosClientId: '625796126992-9sov4h4n4hkcr27b8q0f8o1drgp8mo0c.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      this.onSignIn(result);
      
      this.props.navigation.navigate('TestScreen');
      
      return result.accessToken;
      
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}
  static navigationOptions = {
    
    headerMode:"float",
    headerStyle: {
        backgroundColor: '#37414a',
        elevation: null
    },

    headerTitleStyle: {
        fontWeight: '300',
        color: '#ffffff',
        fontSize: 20,
        flex:1,
        textAlign:"center"
    },
    // headerLeft: null
    backTitle: "Back",
    headerTintColor: '#fff',      
}
  render() {  
    
  return (
    <View style={styles.container}>
      <View style={styles.headerB}></View>
      <View style={styles.sTest}>
       <Button
      title="Sign In With Google"
      onPress={() => this.signInWithGoogleAsync()}

      />
       
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('TestScreen')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/Qpw5zdM/Button-with-Background-3-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Results')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/zb6Qy4Z/Button-with-Background-4-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Etutorial')
          }}>
          <Image
            source={{
              uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6efc3c78405a2511dfcb9fa6e20a1cbf',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SettingScreen')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/dG3Rh90/Button-with-Background-6-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
    
      
    
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#d1d1d1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    width: 420,
    height: 50,
    backgroundColor: '#37414a',
  },
  headerA: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 420,
    height: 77,
    backgroundColor: '#37414a',
  },
  headerB: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 420,
    height: 77,
    backgroundColor: '#333c42',
  },
  testB: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 104,
    height: 64,
  },
  resultsB: {
    position: 'absolute',
    bottom: 0,
    left: 90,
    width: 104,
    height: 64,
  },
  tutorialB: {
    position: 'absolute',
    bottom: 0,
    right: 90,
    width: 104,
    height: 64,
  },
  settingsB: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 104,
    height: 64,
  },
  imageIconStyle: {
    height: 60,
    width: 95,
  },
  imageIconStyle2: {
    height: 130,
    width: 141,
  },
  imageIconStyle3: {
    height: 10,
    width: 22,
    backgroundColor:'white'
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  midButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sTest: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    
    flexWrap: 'nowrap',
  },
  sTestText: {
    fontSize: 36,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#0EA3EE",
    padding: 10
  },
});
