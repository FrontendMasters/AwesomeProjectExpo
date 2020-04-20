import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>
          {' '}
          Here are some boxes of different Colors{' '}
        </Text>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.boxText}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.boxText}>Blue: #2aa198</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.boxText}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.boxText}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
