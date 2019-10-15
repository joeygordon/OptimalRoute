import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showLocation} from 'react-native-map-link';

import {findJobInArray} from '../utils/findJobInArray';
import {colors} from '../consts/colors';

const Route = ({routeObject, jobsList}) => {
  const {route} = routeObject;

  // this API returns data in an unusual format.
  // this just formats it into an array.
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
  const routeView = (stop, i) => {
    // get data for the current stop
    const stopData = findJobInArray(stop.name, jobsList);

    // get data for the previous stop to use for directions
    const previousStop = routeStops[i - 1];
    const previousStopData = previousStop
      ? findJobInArray(previousStop.name, jobsList)
      : {};

    const dividerLine = i !== 0 ? <View style={styles.dividerLine} /> : null;

    return (
      <View>
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
  };

  const listHeader = () => (
    <View style={styles.header}>
      <Text style={styles.heading}>Your Route</Text>
      <Text style={styles.subHeading}>{jobsList.length} total stops</Text>
      <Text style={styles.subHeading}>
        Tap a stop to get directions from the previous stop
      </Text>
    </View>
  );

  return (
    <FlatList
      data={routeStops}
      renderItem={({index, item}) => routeView(item, index)}
      keyExtractor={(item, i) => `${item.name}-${i}`}
      ListHeaderComponent={listHeader}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 16,
    marginTop: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 8,
  },
  cardWrapper: {
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.cardBackground,
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
    color: colors.lightText,
    textTransform: 'uppercase',
    fontSize: 16,
    marginRight: 8,
  },
  dividerLine: {
    width: 3,
    height: 64,
    marginLeft: 80,
    backgroundColor: colors.primary,
  },
});

export default Route;
