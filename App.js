/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';

import AppNavigation from './AppNavigation';

class App extends Component {

  render() {
    return (
      <AppNavigation />
    );
  }

}

const styles = StyleSheet.create({
  
});

export default App;