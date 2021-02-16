import * as React from 'react';
import { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  LoaderComponent,
  ScrollView,
  Button
} from 'react-native';
import Constants from 'expo-constants';
import { CheckBox } from 'react-native-elements';
import * as firebase from 'firebase';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Results extends React.Component {
  state ={
    currentUser:"",
    volume1:"",
    dateFB: [],
    displayDate: [],
  }
  
    
  
  UNSAFE_componentWillMount=async() =>{ 
      firebase.database().ref('users/currentUser').once('value',(snapshot) =>{
    let data = snapshot.val();
    let currentUser = data;//Object.values(data);
    this.setState({currentUser});
  })
  }
  result = async() => { 
    firebase.database().ref('users/currentUser').once('value',(snapshot) =>{
    let data = snapshot.val();
    let currentUser = data;//Object.values(data);
    this.setState({currentUser});
  })
    firebase.database().ref('/users/'+this.state.currentUser+'/date').once('value',(snapshot) =>{
    let dateFB = [];
    snapshot.forEach((childSnapshot) =>{
      var data = childSnapshot.key;
      dateFB.push(data);

    });
   this.setState({dateFB}); 
    
  });
var displayDate = [];
for(let i = 0; i < this.state.dateFB.length; i++){
    let dateValue = this.state.dateFB[i];
		displayDate.push(
			<CheckBox
            
            title={this.state.dateFB[i]}
            checkedColor='red'
            onPress={() => this.props.navigation.navigate('Results2', {
              something: dateValue, currentUser: this.state.currentUser , })}
          />
				
		)
	}
  this.setState({displayDate});
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
    this.result;
    return (
      <View style={styles.container}>
        
        <View style={styles.headerB}></View>
        <View style={styles.sTest}>
          
          <Text style={styles.sTestText}></Text>
          <Text style={styles.sTestText}></Text>
          <Text style={styles.sTestText}></Text>
          <Button
        title="Press for Recent result"
        onPress={() => this.result()}
        
      />
          <ScrollView>
          { this.state.displayDate }
          </ScrollView>
          
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
    backgroundColor: 'white',
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
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  sTestText: {
    fontSize: 36,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});
