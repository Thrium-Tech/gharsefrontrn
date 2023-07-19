// LiveTrackingScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const LiveTrackingScreen = () => {
  const rider = {
    name: 'John Doe',
    orderNumber: '12345',
    status: 'On the way',
  };

  const fromLocation = { latitude: 37.78825, longitude: -122.4324 };
  const toLocation = { latitude: 37.78925, longitude: -122.4324 };

  const coordinates = [fromLocation, toLocation];

  // Define your custom map style
  const mapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5', // Greyish color for map background
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off', // Turn off POI icons like restaurants, gas stations, etc.
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161', // Greyish color for text labels on the map
        },
      ],
    },
    // Add more customizations as needed...
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: fromLocation.latitude,
          longitude: fromLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapStyle} // Set the custom map style here
      >
        <Polyline coordinates={coordinates} strokeWidth={5} strokeColor="#00FF00" />
        <Marker
          coordinate={fromLocation}
          title={rider.name}
          description={`Order #: ${rider.orderNumber} | Status: ${rider.status}`}
        />
        <Marker coordinate={toLocation} />
      </MapView>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Rider Name: {rider.name}</Text>
        <Text style={styles.detailsText}>Order Number: {rider.orderNumber}</Text>
        <Text style={styles.detailsText}>Status: {rider.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default LiveTrackingScreen;
