import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import JobItem from './JobItem';
import CreateButton from './CreateButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const fakeJobs = Array(30).fill({});

const jobsList = fakeJobs.map((job, i) => {
  return (
    <Card key={i}>
      <JobItem />
    </Card>
  );
});

const Create = () => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView>
      <View style={styles.introView}>
        <Text style={styles.introText}>Select route locations</Text>
      </View>
      {jobsList}
    </ScrollView>
    <CreateButton />
  </SafeAreaView>
);

Create.navigationOptions = {
  title: 'Create A Route',
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },
  introView: {
    margin: 16,
    marginTop: 32,
  },
  introText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default Create;
