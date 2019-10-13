import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const CreateButton = ({listCount, handlePress}) => {
  const buttonTitle =
    listCount < 2 ? 'Select At Least 2 Jobs' : `Map ${listCount} Stops`;

  return (
    <View style={styles.view}>
      <Button
        buttonStyle={styles.button}
        title={buttonTitle}
        onPress={handlePress}
        disabled={listCount < 2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 32,
    right: 32,
    bottom: 32,
    zIndex: 2,
  },
  button: {
    backgroundColor: 'rebeccapurple',
    borderRadius: 8,
  },
});

export default CreateButton;
