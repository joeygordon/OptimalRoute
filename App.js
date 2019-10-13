import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import NavContainer from './Components/NavContainer';

const App = () => {
  return (
    <View style={styles.body}>
      <StatusBar barStyle="light-content" />
      <NavContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
