import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const CreateButton = ({listCount}) => {
  const buttonTitle =
    listCount < 2 ? 'Select at least 2 Jobs' : `Map ${listCount} Stops`;
  return (
    <Button
      buttonStyle={styles.button}
      title={buttonTitle}
      onPress={() => {}}
    />
  );
};

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
