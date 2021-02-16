import * as React from 'react';
import  { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  LoaderComponent,
  ScrollView,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Constants from 'expo-constants';
import { CheckBox } from 'react-native-elements';

import * as firebase from 'firebase';




// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state={
    currentUser: "",
    height:"",
    age:"",
    sumFev:"",
  }
  handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleAge = (text) => {
      this.setState({ age: text })
   }
  constructor() {
      super();

      this.state = {
        male: false,
        female: false,
        children: false,
        currentUser: '',
        height:0,
        age:0,
        sumFev:'' ,
        sumPef: '',
        
        
      };
    }
    UNSAFE_componentWillMount(){ 
      firebase.database().ref('users/currentUser').once('value',(snapshot) =>{
    let data = snapshot.val();
    let currentUser = snapshot.val();//Object.values(data);
    this.setState({currentUser});
  })

    }
    calculatePef = () => {
  //var { height, age } = this.state;
  var height = this.state.height;
  var age = this.state.age;
  if (this.state.male){
    this.setState({
    sumPef: (((((Number(height)/100)*5.48)+1.58)-(Number(age)*0.041))).toFixed(3)
  });
  firebase.database().ref('/users/' + this.state.currentUser ).update({pef: (((((Number(height)/100)*5.48)+1.58)-(Number(age)*0.041))).toFixed(3)});
  
  } else if (this.state.female) {
    this.setState({
    sumPef: (((((Number(height)/100)*3.72)+2.24)-(Number(age)*0.031))).toFixed(3)
  });
  firebase.database().ref('/users/' + this.state.currentUser ).update({pef: (((((Number(height)/100)*5.48)+1.58)-(Number(age)*0.041))).toFixed(3)});
  
  }else if (this.state.children) {
    this.setState({
    sumPef: ((((Number(height)-100)*5)+100)/60).toFixed(3)
  });
  firebase.database().ref('/users/' + this.state.currentUser ).update({pef: (((((Number(height)/100)*5.48)+1.58)-(Number(age)*0.041))).toFixed(3)});
  
  } else {
    this.setState({
    sumPef: ""
  });
  }
  this.setState({
    sumFev: (-2.154 + (0.0249*Number(height)) + (0.0511*Number(age))).toFixed(3)
  });
  firebase.database().ref('/users/' + this.state.currentUser ).update({fev1: (-2.154 + (0.0249*Number(height)) + (0.0511*Number(age))).toFixed(3)});
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
        <Text style={styles.sTestText}>Height:</Text>
        <TextInput style={styles.button}
        placeholder='Your height in cm'
        onChangeText = {this.handleHeight}
        />
        <Text style={styles.sTestText}>Age:</Text>
        <TextInput style={styles.button}
        placeholder='Your age in cm'
        onChangeText = {this.handleAge}
        />
        <Text style={styles.sTestText}>Category:</Text>
        <ScrollView>
          <CheckBox
            checkedIcon={<Image
            source={{
              uri: 'https://i.ibb.co/QKB0sgM/on.png',
            }}
            style={styles.imageIconStyle3}
          />}
            uncheckedIcon={<Image
            source={{
              uri: 'https://i.ibb.co/dDYRhnF/off.png',
            }}
            style={styles.imageIconStyle3}
          />}
            title='Adult Male'
            checkedColor='red'
            checked={this.state.male}
            onPress={() => this.setState({ male: !this.state.male })}
          />
          <CheckBox
            checkedIcon={<Image
            source={{
              uri: 'https://i.ibb.co/QKB0sgM/on.png',
            }}
            style={styles.imageIconStyle3}
          />}
            uncheckedIcon={<Image
            source={{
              uri: 'https://i.ibb.co/dDYRhnF/off.png',
            }}
            style={styles.imageIconStyle3}
          />}
            title='Adult Female'
            checkedColor='red'
            checked={this.state.female}
            onPress={() => this.setState({ female: !this.state.female })}
          />
          <CheckBox
            checkedIcon={<Image
            source={{
              uri: 'https://i.ibb.co/QKB0sgM/on.png',
            }}
            style={styles.imageIconStyle3}
          />}
            uncheckedIcon={<Image
            source={{
              uri: 'https://i.ibb.co/dDYRhnF/off.png',
            }}
            style={styles.imageIconStyle3}
          />}
            title='Children'
            checkedColor='red'
            checked={this.state.children}
            onPress={() => this.setState({ children: !this.state.children })}
          />
          
        </ScrollView>
        <TouchableHighlight onPress={this.calculatePef}>
        <Text>Calculate</Text>
      </TouchableHighlight>
        <Text style={styles.sTestText}>PEF:{this.state.sumPef}</Text>
        <Text style={styles.sTestText}>FEV1:{this.state.sumFev}</Text>
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
    backgroundColor: "#FFFFFF",
    padding: 10
  },
});
