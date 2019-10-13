import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showLocation} from 'react-native-map-link';

import {findJobInArray} from '../utils/findJobInArray';

const Route = ({routeObject, jobsList}) => {
  const {route} = routeObject;

  // extract the stops from the poorly structured api response
  const routeStops = Object.entries(route).map(stop => {
    return stop[1];
  });

  // builds links to map directions between stops
  const linkToMap = (start, end) => {
    showLocation({
      latitude: end.lat,
      longitude: end.long,
      sourceLatitude: start.lat,
      sourceLongitude: start.long,
      googleForceLatLon: true,
    }).then(() => {});
  };

  // build out view for each stop on the route
  const routeViews = routeStops.map((stop, i) => {
    // get data for the current stop
    const stopData = findJobInArray(stop.name, jobsList);

    // get data for the previous stop to use for directions
    const previousStop = routeStops[i - 1];
    const previousStopData = previousStop
      ? findJobInArray(previousStop.name, jobsList)
      : {};

    const dividerLine = i !== 0 ? <View style={styles.dividerLine} /> : null;

    return (
      <View key={`${stop.name}-${i}`}>
        {dividerLine}
        <TouchableOpacity
          disabled={i === 0}
          onPress={() => linkToMap(previousStopData, stopData)}
          style={styles.cardWrapper}>
          <View style={styles.card}>
            <View>
              <Text style={styles.detailText}>{stopData.name}</Text>
              <Text>{stopData.address}</Text>
            </View>
            {i !== 0 && <Text style={styles.mapLink}>Map</Text>}
          </View>
        </TouchableOpacity>
      </View>
    );
  });

  return <>{routeViews}</>;
};

const styles = StyleSheet.create({
  containerView: {
    paddingTop: 32,
    paddingBottom: 64,
  },
  cardWrapper: {
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 4,
    margin: 8,
    marginLeft: 16,
    marginRight: 16,
    padding: 16,
  },
  detailText: {
    fontSize: 24,
  },
  mapLink: {
    color: '#999',
    textTransform: 'uppercase',
    fontSize: 16,
    marginRight: 8,
  },
  dividerLine: {
    width: 3,
    height: 64,
    marginLeft: 80,
    backgroundColor: 'rebeccapurple',
  },
});

export default Route;
