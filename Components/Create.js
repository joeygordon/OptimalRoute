import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import JobItem from './JobItem';
import CreateButton from './CreateButton';

import {jobs} from '../__mocks__/jobs';

const Create = ({navigation}) => {
  const [selectedJobs, setSelectedJobs] = useState([]);
  const selectedCount = selectedJobs.length;

  const findJobInArray = id => {
    return selectedJobs.find(job => {
      return job.id === id;
    });
  };

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

  const handleCreatePress = () => {
    navigation.navigate('BuildRoute', {jobsList: selectedJobs});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.scrollView}>
          <View style={styles.introView}>
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
    height: '100%',
    backgroundColor: '#eeeeee',
  },
  scrollView: {
    paddingBottom: 104,
  },
  introView: {
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
