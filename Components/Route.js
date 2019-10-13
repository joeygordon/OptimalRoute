import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {showLocation} from 'react-native-map-link';

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

  const linkToMap = (start, end) => {
    showLocation({
      latitude: end.lat,
      longitude: end.long,
      sourceLatitude: start.lat, // optionally specify starting location for directions
      sourceLongitude: start.long, // not optional if sourceLatitude is specified
      googleForceLatLon: true, // optionally force GoogleMaps to use the latlon for the query instead of the title
    });
  };

  const routeViews = routeStops.map((stop, i) => {
    const stopData = findJobInArray(stop.name);
    const previousStop = routeStops[i - 1];
    const previousStopData = previousStop
      ? findJobInArray(previousStop.name)
      : {};
    const distanceView =
      stop.distance !== 0 ? <View style={styles.dividerLine} /> : null;

    return (
      <View key={`${stop.name}-${i}`}>
        {distanceView}
        <TouchableOpacity
          disabled={i === 0}
          onPress={() => linkToMap(previousStopData, stopData)}
          style={styles.cardWrapper}>
          <View style={styles.card}>
            <View style={styles.cardInfo}>
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
  distanceText: {
    width: 'auto',
    paddingLeft: 76,
  },
});

export default Route;
