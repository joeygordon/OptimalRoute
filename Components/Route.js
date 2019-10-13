import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Route = ({routeObject}) => {
  const {route} = routeObject;

  const routeStops = Object.entries(route).map(stop => {
    return stop[1];
  });

  const routeViews = routeStops.map(stop => {
    return (
      <>
        <View key={stop.name}>
          <Text>{stop.distance}</Text>
        </View>
        <View />
      </>
    );
  });

  return <View>{routeViews}</View>;
};

const styles = StyleSheet.create({});

export default Route;
