import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const JobItem = () => (
  <View>
    <Text style={styles.nameText}>Person Name</Text>
    <Text style={styles.addressText}>1234 NE Whatever Place</Text>
  </View>
);

const styles = StyleSheet.create({
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 16,
  },
});

export default JobItem;
