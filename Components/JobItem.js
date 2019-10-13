import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-elements';

const JobItem = ({jobInfo, handleSelection, selected}) => {
  const _handlePress = () => handleSelection(jobInfo);
  const cardStyle = selected ? styles.selectedCard : styles.card;
  return (
    <TouchableOpacity onPress={_handlePress}>
      <View style={cardStyle}>
        <Text style={styles.nameText}>{jobInfo.name}</Text>
        <Text style={styles.addressText}>{jobInfo.address}e</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 4,
    margin: 8,
    marginLeft: 16,
    marginRight: 16,
    padding: 16,
  },
  selectedCard: {
    backgroundColor: 'green',
    borderRadius: 4,
    margin: 8,
    padding: 16,
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
