import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const colorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      keyExtractor={item => item.colorName}
      style={styles.container}
      data={colors}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default colorPalette;
