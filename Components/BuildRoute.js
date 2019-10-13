import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Route from './Route';

const BuildRoute = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState([]);

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
    const locations = convertJobObjectFormat(
      navigation.getParam('jobsList', []),
    );

    const requestBody = {
      locations: JSON.stringify(locations),
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
    return responseJson;
  };

  useEffect(() => {
    fetchRoute()
      .then(response => {
        // console.log(response);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(true);
      });
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Route routeObject={route} />;
};

BuildRoute.navigationOptions = {
  title: 'Your Route',
};

const styles = StyleSheet.create({});

export default BuildRoute;
