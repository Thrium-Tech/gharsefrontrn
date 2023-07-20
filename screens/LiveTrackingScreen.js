import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import AppHeader from '../components/AppHeader';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const LiveTrackingScreen = ({navigation}) => {
  const rider = {
    name: 'Leonardo Di Caprio',
    orderNumber: 'BLUSH1020',
    status: 'On Time',
    eta: '6:00 pm',
  };

  const fromLocation = { latitude: 37.78825, longitude: -122.4324 };
  const toLocation = { latitude: 37.78925, longitude: -122.4324 };

  const coordinates = [fromLocation, toLocation];

  // Define your custom map style

  // const mapStyle = [
  //   {
  //     elementType: 'geometry',
  //     stylers: [
  //       {
  //         color: '#f5f5f5', // Greyish color for map background
  //       },
  //     ],
  //   },
  //   {
  //     elementType: 'labels.icon',
  //     stylers: [
  //       {
  //         visibility: 'off', // Turn off POI icons like restaurants, gas stations, etc.
  //       },
  //     ],
  //   },
  //   {
  //     elementType: 'labels.text.fill',
  //     stylers: [
  //       {
  //         color: '#616161', // Greyish color for text labels on the map
  //       },
  //     ],
  //   },
  //   // Add more customizations as needed...
  // ];

  const mapStyle = [];

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <View style={styles.mapView} >
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: fromLocation.latitude,
            longitude: fromLocation.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
          customMapStyle={mapStyle} // Set the custom map style here
        >
          <Polyline coordinates={coordinates} strokeWidth={5} strokeColor="#393939" />
          <Marker
            coordinate={fromLocation}
            title={rider.name}
            description={`Order #: ${rider.orderNumber} | Status: ${rider.status}`}
          />
          <Marker title="McDonald's" description='Open Now' coordinate={toLocation} />
        </MapView>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.personalDetails} >
          <View style={styles.imageContainer} >
            <Image style={styles.image} source={require('../assets/buddy.png')} />
          </View>
          <View style={styles.heading}>
            <Text style={styles.subHeadText}>Delivery Executive</Text>
            <Text style={styles.detailsText}>{rider.name}</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#002B5B', width: 42, height: 42, justifyContent: 'center', alignItems: 'center', borderRadius: 21 }}>
            <FontAwesome name="phone" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.orderDetails} >
          <View style={styles.orderNo}>
            <Text style={styles.subText}>Order #</Text>
            <Text style={styles.orderText}>{rider.orderNumber}</Text>
          </View>
          <View style={styles.eta}>
            <Text style={styles.subText}>ETA Delivery </Text>
            <Text style={styles.orderText}>{rider.eta}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="dot-single" size={30} color="#23E9B4" />
            <Text style={styles.orderText}>{rider.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  mapView: {
    height: '80%',
    borderRadius: 25,
    overflow: 'hidden',
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '26%',
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: 'white',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  personalDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    width: '70%',
    // marginRight: 20,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  subHeadText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: '#191D21',
  },
  detailsText: {
    fontSize: 17,
    fontFamily: 'Manrope-Bold',
    marginBottom: 4,
  },
  orderDetails: {
    paddingVertical: 15,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subText: {
    color: '#191D21',
    fontFamily: 'Manrope-Regular',
    fontSize: 10,
  },
  orderText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 12,
  },
});

export default LiveTrackingScreen;
