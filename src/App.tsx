import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>hello world</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignContent:'center',
  }
});

export default App;
