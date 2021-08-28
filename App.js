import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Effect1 from './components/Effect1';
import UseMemo from './components/UseMemo';


export default function App() {
  return (
    <View style={styles.container}>
      <Effect1/>
      <UseMemo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
