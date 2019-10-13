import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Route = ({routeObject, jobsList}) => {
  const {route} = routeObject;

  // TODO make this a util
  const findJobInArray = id => {
    return jobsList.find(job => {
      return job.id === parseInt(id);
    });
  };

  const routeStops = Object.entries(route).map(stop => {
    return stop[1];
  });

  const routeViews = routeStops.map((stop, i) => {
    const stopData = findJobInArray(stop.name);
    const distanceView =
      stop.distance !== 0 ? (
        <>
          <View style={styles.dividerLine} />
          <Text>{stop.arrival}</Text>
          <View style={styles.dividerLine} />
        </>
      ) : null;

    return (
      <View key={`${stop.name}-${i}`}>
        <View style={styles.detailView}>
          {distanceView}
          <Text style={styles.detailText}>{stopData.name}</Text>
          <Text>{stopData.address}</Text>
        </View>
        <View />
      </View>
    );
  });

  return (
    <ScrollView>
      <View style={styles.containerView}>{routeViews}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    paddingTop: 32,
    paddingBottom: 64,
  },
  detailView: {
    alignItems: 'center',
  },
  detailText: {
    fontSize: 24,
  },
  dividerLine: {
    width: 3,
    height: 32,
    backgroundColor: 'rebeccapurple',
  },
});

export default Route;
