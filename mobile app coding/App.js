import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen1 from './Pages/Screen1';
import Screen2 from './Pages/Screen2';
import Screen3 from './Pages/Screen3';
import TestScreen from './Pages/TestScreen';
import TestPef from './Pages/TestPef';
import TestFev from './Pages/TestFev';
import SettingScreen from './Pages/SettingScreen';
import Results from './Pages/Results';
import Results2 from './Pages/Results2';
import Etutorial from './Pages/etutorial';
import graph from './Pages/graph';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AppNavigator = createStackNavigator({
  SignIn: Screen2,
  Screen3: Screen3,
  TestScreen: TestScreen,
  TestPef: TestPef,
  TestFev: TestFev,
  SettingScreen: SettingScreen,
  Results: Results,
  Results2: Results2,
  graph: graph,
  Etutorial: Etutorial,
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({});
