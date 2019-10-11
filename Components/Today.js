import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import JobItem from './JobItem';
import Calendar from './Calendar';

const Today = () => (
  <SafeAreaView>
    <ScrollView>
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

export default Today;
