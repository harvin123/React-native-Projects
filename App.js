/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './Components/Header'; 
import StartGameScreen from './Screens/StartgameScreen'; 
const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      <StartGameScreen/>
          </View>
  );
};

const styles = StyleSheet.create({
 screen:{
   flex:1 
 }
});

export default App;
