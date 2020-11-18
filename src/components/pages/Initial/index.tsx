import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Initial</Text>
    </View>
  );
};

export default Home;