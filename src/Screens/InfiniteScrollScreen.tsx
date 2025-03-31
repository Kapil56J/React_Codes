import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfiniteScrollScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Infinite Scroll Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default InfiniteScrollScreen; 