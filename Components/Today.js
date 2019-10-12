import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import JobItem from './JobItem';
import Calendar from './Calendar';
import {jobs} from '../__mocks__/jobs';

const Today = () => {
  const jobsList = jobs.map(job => {
    console.log('soifhjew', job);
    return (
      <JobItem key={job.id} handleSelection={()=>{}} jobInfo={job} />
    );
  });

  return (
    <SafeAreaView>
      <ScrollView style={todayStyles.scrollView}>
        <View>
          <Calendar />
          {jobsList}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Today.navigationOptions = {
  title: 'Schedule',
};

const todayStyles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
});

export default Today;
