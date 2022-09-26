import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import ComponentExample from './components/ComponentExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome to the intro React Native workshop!
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
