import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import firebase from 'firebase'

export default class Screen1 extends Component{

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(function(user)
    {
      if(user)
      {
        this.props.navigation.navigate('Screen3')
      }
      else{
        this.props.navigation.navigate('Screen2')
      }
    }.bind(this)
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.topView}>
        
        
      
      </View>
    );
  }
}

const styles = StyleSheet.create({

  topView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },

  titleText: {
    fontFamily: "Cochin",
    fontSize: 30,
    fontWeight: "bold",
    
  },
  
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    top: 0,
  },

  DineInStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },

  TakeAwayStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 15,
    height: 70,
    width: 80,
    resizeMode: 'stretch',
  },

  TextStyle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: "bold",
    marginBottom:0,
    marginLeft:10,
    marginRight: 0,
  },

  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    marginLeft:-5,
    height: 70,
  },

  bottomView: {
    width: '100%',
    flexDirection: 'row',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: -5, 
  },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

     buttonContainer: {
        flex: 1,
    },
});
