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

// mocking 'current location' for time/complexity reasons
import {homeAddress} from '../__mocks__/jobs';

const BuildRoute = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState([]);
  const [jobsInRoute, setJobsInRoute] = useState([]);
  const [error, setError] = useState(null);

  // passing the jobsList array as a param into this component
  // instead of using some sort of global state management
  // because of time and complexity for this project
  const jobsList = navigation.getParam('jobsList', []);

  // Add our current location to the beginning of the route
  const addHomeToJobs = jobs => {
    return [homeAddress, ...jobs];
  };

  // format our data into what the API expects
  const convertJobObjectFormat = jobs => {
    return jobs.map(job => {
      return {
        address: job.id,
        lat: job.lat,
        lng: job.long,
      };
    });
  };

  // this is necessary for this specific API.
  // you wouldn't normally have to do this if the API work properly
  // with normal JSON requests like virtually every other API on earth.
  const encodeBodyForAPI = data => {
    const formBody = [];

    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&');
  };

  useEffect(() => {
    // fetch route from API
    const fetchRoute = async () => {
      const jobsWithHome = addHomeToJobs(jobsList);
      const formattedJobs = convertJobObjectFormat(jobsWithHome);

      // build request body
      const requestBody = {
        locations: JSON.stringify(formattedJobs),
      };

      // encode body because this API is dumb
      const encodedBody = encodeBodyForAPI(requestBody);

      // make API call
      // Auth info is in here for demo reasons. Pretend it's in a proper .env file
      const response = await fetch('https://api.routexl.com/tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization: 'Basic Ym9uam9leTpib25qb2V5',
        },
        body: encodedBody,
      });

      const responseJson = await response.json();

      // update local state
      setRoute(responseJson);
      setJobsInRoute(jobsWithHome);
    };

    fetchRoute()
      .then(response => {
        // everything went well.
        // kill the loader, show the route
        setLoading(false);
      })
      .catch(err => {
        // there was an error
        // show the error screen
        setError(err);
        setLoading(false);
      });
  }, [jobsList]);

  // loading screen
  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, styles.activity]}>
        <ActivityIndicator size="large" color="rebeccapurple" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.header}>
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
  headerTitle: 'Your Route',
  // headerLeft: <></>,
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: '#eeeeee',
  },
  activity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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

export default BuildRoute;
