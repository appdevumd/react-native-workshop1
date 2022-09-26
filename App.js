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
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Put your text here!
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
