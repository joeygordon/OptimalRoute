import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Route from './Route';
import {homeAddress} from '../__mocks__/jobs';

const BuildRoute = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState([]);
  const jobsList = navigation.getParam('jobsList', []);
  const [jobsInRoute, setJobsInRoute] = useState([]);

  const addHomeToJobs = jobs => {
    return [homeAddress, ...jobs];
  };

  const convertJobObjectFormat = jobs => {
    return jobs.map(job => {
      return {
        address: job.id,
        lat: job.lat,
        lng: job.long,
      };
    });
  };

  const fetchRoute = async () => {
    const jobsWithHome = addHomeToJobs(jobsList);
    const formattedJobs = convertJobObjectFormat(jobsWithHome);

    const requestBody = {
      locations: JSON.stringify(formattedJobs),
    };

    const formBody = [];
    for (const property in requestBody) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(requestBody[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    const formattedFormBody = formBody.join('&');

    const response = await fetch('https://api.routexl.com/tour', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: 'Basic Ym9uam9leTpib25qb2V5',
      },
      body: formattedFormBody,
    });
    const responseJson = await response.json();
    setRoute(responseJson);
    setJobsInRoute(jobsWithHome);
    return responseJson;
  };

  useEffect(() => {
    fetchRoute()
      .then(response => {
        setLoading(false);
      })
      .catch(err => {
        // TODO handle error
        setLoading(true);
      });
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="rebeccapurple" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.introView}>
          <Text style={styles.heading}>Your Route</Text>
          <Text style={styles.subHeading}>
            {jobsList.length} stops - some times
          </Text>
        </View>
        <Route routeObject={route} jobsList={jobsInRoute} />
      </ScrollView>
    </SafeAreaView>
  );
};

BuildRoute.navigationOptions = {
  title: 'Your Route',
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: '#eeeeee',
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

export default BuildRoute;
