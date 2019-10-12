import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import JobItem from './JobItem';
import CreateButton from './CreateButton';

import {jobs} from '../__mocks__/jobs';

const Create = () => {
  const [selectedJobs, setSelectedJobs] = useState([]);
  const selectedCount = selectedJobs.length;

  const _handleItemPress = job => {
    if (findJobInArray(job.id)) {
      // remove job from array
      const newSelectedJobArray = selectedJobs.filter(item => {
        return item.id !== job.id;
      });
      setSelectedJobs(newSelectedJobArray);
    } else {
      const newSelectedJobArray = selectedJobs.concat(job);
      setSelectedJobs(newSelectedJobArray);
    }
  };

  const findJobInArray = id => {
    return selectedJobs.find(job => {
      return job.id === id;
    });
  };

  const jobsList = jobs.map(job => {
    const isSelected = !!findJobInArray(job.id);
    return (
      <JobItem
        key={job.id}
        handleSelection={_handleItemPress}
        jobInfo={job}
        selected={isSelected}
      />
    );
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.introView}>
          <Text style={styles.introText}>Select Stops</Text>
        </View>
        {jobsList}
      </ScrollView>
      <CreateButton listCount={selectedCount} />
    </SafeAreaView>
  );
};

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
