import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import JobItem from './JobItem';
import CreateButton from './CreateButton';

// mocked jobs with addresses
import {jobs} from '../__mocks__/jobs';
import {findJobInArray} from '../utils/findJobInArray';

const Create = ({navigation}) => {
  const [selectedJobs, setSelectedJobs] = useState([]);
  const selectedCount = selectedJobs.length;

  useEffect(() => {
    // reset selected jobs when returning to this view
    const focusListener = navigation.addListener('willFocus', () => {
      setSelectedJobs([]);
    });

    return () => {
      focusListener.remove();
    };
  }, [navigation]);

  const handleJobSelection = job => {
    // if the selected job is already in the selectedJobs list, remove it
    // if it's not there, add it to the list
    if (findJobInArray(job.id, selectedJobs)) {
      const selectedJobsWithoutCurrent = selectedJobs.filter(item => {
        return item.id !== job.id;
      });
      setSelectedJobs(selectedJobsWithoutCurrent);
    } else {
      setSelectedJobs(selectedJobs.concat(job));
    }
  };

  // Each job card
  const jobsList = jobs.map(job => {
    // is the card currently selected?
    const isSelected = !!findJobInArray(job.id, selectedJobs);

    return (
      <JobItem
        key={job.id}
        handleSelection={handleJobSelection}
        jobInfo={job}
        selected={isSelected}
      />
    );
  });

  // navigate to new route with job data on CreateButton press
  const handleCreatePress = () => {
    navigation.navigate('BuildRoute', {jobsList: selectedJobs});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.heading}>Create A Route</Text>
            <Text style={styles.subHeading}>
              Select at least 2 locations to calculate the most efficient route.
            </Text>
          </View>
          {jobsList}
        </View>
      </ScrollView>
      <CreateButton listCount={selectedCount} handlePress={handleCreatePress} />
    </SafeAreaView>
  );
};

Create.navigationOptions = {
  title: 'Create A Route',
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#eeeeee',
  },
  container: {
    paddingBottom: 104,
  },
  header: {
    margin: 16,
    marginTop: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
  },
});

export default Create;
