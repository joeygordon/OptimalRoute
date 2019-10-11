import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const CreateButton = () => (
  <Button buttonStyle={styles.button} title="Create Route" onPress={() => {}} />
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rebeccapurple',
    borderRadius: 8,
    position: 'absolute',
    left: 32,
    right: 32,
    bottom: 32,
    alignItems: 'center',
  },
});

export default CreateButton;
