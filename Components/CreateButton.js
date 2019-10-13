import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const CreateButton = ({listCount, handlePress}) => {
  const buttonTitle =
    listCount < 2 ? 'Select At Least 2 Jobs' : `Map ${listCount} Stops`;

  return (
    <LinearGradient colors={['#eeeeee00', '#eeeeee', '#eeeeee']} locations={[0, 0.5, 1]} style={styles.view}>
      <Button
        buttonStyle={styles.button}
        title={buttonTitle}
        onPress={handlePress}
        disabled={listCount < 2}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: 48,
    paddingTop: 32,
    zIndex: 2,
  },
  button: {
    backgroundColor: 'rebeccapurple',
    borderRadius: 8,
    height: 56,
    marginLeft: 32,
    marginRight: 32,
  },
});

export default CreateButton;
