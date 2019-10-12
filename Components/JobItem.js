import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';

const JobItem = ({jobInfo, handleSelection, selected}) => {
  const _handlePress = () => handleSelection(jobInfo);
  const cardStyle = selected ? styles.selectedCard : null;
  return (
    <TouchableOpacity onPress={_handlePress}>
      <Card containerStyle={cardStyle}>
        <Text style={styles.nameText}>{jobInfo.name}</Text>
        <Text style={styles.addressText}>{jobInfo.address}e</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  selectedCard: {
    backgroundColor: 'green',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 16,
  },
});

export default JobItem;
