import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {colors} from '../consts/colors';

const JobItem = ({jobInfo, handleSelection, selected}) => {
  const selectedStyle = selected ? styles.selectedCard : null;

  return (
    <TouchableOpacity onPress={() => handleSelection(jobInfo)}>
      <View style={[styles.card, selectedStyle]}>
        <Text style={[styles.text, styles.nameText]}>{jobInfo.name}</Text>
        <Text style={styles.text}>{jobInfo.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    marginLeft: 16,
    marginRight: 16,
    padding: 16,
    borderRadius: 4,
    backgroundColor: colors.cardBackground,
  },
  selectedCard: {
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 16,
  },
  nameText: {
    fontWeight: 'bold',
  },
});

export default JobItem;
