/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './src/pages/Login'

export default class App extends Component{
  render(){
    return(
      <>
        <View style={styles.containers}>
            <StatusBar backgroundColor='#f9f9f9' barStyle='dark-content'/>
            <Login/>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    backgroundColor: 'white',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

