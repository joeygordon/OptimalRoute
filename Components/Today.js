import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import JobItem from './JobItem';
import Calendar from './Calendar';

const Today = () => (
  <SafeAreaView>
    <ScrollView style={todayStyles.scrollView}>
      <View>
        <Calendar />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </View>
    </ScrollView>
  </SafeAreaView>
);

Today.navigationOptions = {
  title: 'Schedule',
};

const todayStyles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
});

export default Today;
