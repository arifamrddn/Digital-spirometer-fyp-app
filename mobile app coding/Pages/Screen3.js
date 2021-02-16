import React, { Component } from "react";

import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import firebase from 'firebase';
export default class Western extends React.Component {
   
signOut = async() => {
  firebase.auth().signOut();
  this.props.navigation.navigate('SignIn');
};
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
    const { navigate } = this.props.navigation;
    let meow = this.props.navigation.state.params.something; //get value from last page
    let meow2 = this.props.navigation.state.params.something2;
    return (
      <React.Fragment>
        <View style={styles.container}>
        <Button title="Sign out" onPress={() => this.signOut()} />
        <text>{meow}</text>
        <text>{meow2}</text>
        </View>
        
      </React.Fragment>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topRight: {
    position: 'absolute',
    width: 120,
    height: 35,
    left: 112,
    top: 60,
    backgroundColor: '#81E2EF',
    alignItems: "center",
    padding: 10
  },
  topRight2: {
    position: 'absolute',
    width: 120,
    height: 35,
    left: 240,
    top: 60,
    backgroundColor: '#81E2EF',
    fontSize: 10,
    alignItems: "center",
    padding: 10
  },
  topRight3: {
    position: 'absolute',
    width: 120,
    height: 35,
    left: 112,
    top: 110,
    backgroundColor: '#81E2EF',
    fontSize: 10,
    alignItems: "center",
    padding: 10
  },
  topRight4: {
    position: 'absolute',
    width: 120,
    height: 35,
    left: 240,
    top: 110,
    backgroundColor: '#81E2EF',
    fontSize: 10,
    alignItems: "center",
    padding: 10
  },
  topRight5: {
    position: 'absolute',
    width: 60,
    height: 35,
    left: 20,
    top: 60,
    backgroundColor: '#000000',
    fontSize: 10,
    alignItems: "center",
    padding: 10
  },
  topRight6: {
    position: 'absolute',
    width: 130,
    height: 35,
    left: 20,
    bottom: 80,
    backgroundColor: '#81E2EF',
    fontSize: 10,
    alignItems: "center",
    padding: 10
  },
  hot: {
    position: 'absolute',
    width: 60,
    height: 35,
    left: 20,
    bottom: 40,
    backgroundColor: '#000000',
    fontSize: 10,
    alignItems: "center",
    padding: 10
  },
  cold: {
    position: 'absolute',
    width: 60,
    height: 35,
    left: 90,
    bottom: 40,
    backgroundColor: '#000000',
    fontSize: 10,
    alignItems: "center",
    padding: 10
  },
  next: {
    position: 'absolute',
    width: 60,
    height: 35,
    right: 40,
    bottom: 40,
    backgroundColor: '#000000',
    fontSize: 10,
    alignItems: "center",
    padding: 10
  },
  header: {
    position: 'absolute',
    width: 500,
    height: 27,
    left: 0,
    top: 158,
    backgroundColor: '#C4C4C4',
    flexDirection:'row',
    marginVertical: 2,
  },
  foodname: {
    fontSize: 12,
    width: 144,
    height: 21,
    alignItems: "center",
  },
  price: {
    fontSize: 12,
    width: 144,
    height: 21,
    alignItems: "center",
    
  },
  quantity: {
    fontSize: 12,
    width: 144,
    height: 21,
    alignItems: "center",
    
  },
  countt: {
    fontSize: 12,
    width: 13,
    height: 21,
    
  },
  tambahh: {
    fontSize: 12,
    width: 12,
    height: 21,
    
    backgroundColor: '#81E2EF',
    alignItems: "center",
    
  },
  tolakk: {
    fontSize: 12,
    width: 12,
    height: 21,
    backgroundColor: '#81E2EF',
    alignItems: "center",
  },
  bigbox: {
    
    flexDirection:'row',
    marginVertical: 8,
  },
  bigbox2: {
    position: 'absolute',
    width: 500,
    height: 596,
    left: 0,
    top: 180,
    backgroundColor: '#efefef',
    flexDirection:'column',
    marginVertical: 8,
  },
  textStyle: {
	color: '#ffffff',
	textAlign: 'center'
  },
  flex : {
    flexDirection: 'row',
    fontSize: 12,
    width: 144,
    height: 21,
    backgroundColor: 'skyblue'
  }
});
