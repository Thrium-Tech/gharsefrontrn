import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';
import { Divider } from 'react-native-elements';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const EditAddressScreen = ({ navigation }) => {

  const [location, setLocation] = useState({latitude: 40.798213, longitude: -84.0729929});
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <View style={styles.container}>
      {/* Edit Card Details Heading */}
      <AppHeader navigation={navigation} />

      <View style={styles.contentContainer}>

        <Text style={styles.heading}>Edit Address</Text>

        {/* Image View */}
        <View style={styles.imageContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title="You are here"
              description="Your current location"
            >
              <View style={styles.customMarker}>
                <Image source={require('../assets/pinHome.png')} style={styles.markerImage} />
              </View>
            </Marker>
          </MapView>
          <TouchableOpacity style={styles.buttomImage}>
            <MaterialIcons name="my-location" size={20} color="#002B5B" />
            <Text style={styles.pinLocationText}>Pin Location</Text>
          </TouchableOpacity>
        </View>

        {/* Address Details */}
        <View style={styles.cardDetailsContainer}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Apt / Suite / Floor</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholderTextColor={'#B3BFCB'} style={styles.input} placeholder="Type Something Here" />
          </View>

          <View style={styles.labelRow}>
            <Text style={styles.label}>Business / Building Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholderTextColor={'#B3BFCB'} style={styles.input} placeholder="Type Something Here" />
          </View>

          {/* Divider */}
          <Divider style={{ marginVertical: 5, }} />

          <View style={{}}>
            <Text style={{ fontSize: 18, fontFamily: 'Manrope-Medium', paddingBottom: 10, }}>Delivery details</Text>
            <ScrollView contentContainerStyle={{}} style={{ marginBottom: 10 }} horizontal>
              <TouchableOpacity onPress={() => setSelectedOption('Leave at Doorstep')} style={[styles.deliveryBackground, selectedOption === 'Leave at Doorstep' && styles.activeOption]} >
                <Text style={[styles.deliveryText, selectedOption === 'Leave at Doorstep' && styles.activeOptionText]}>Leave at Doorstep</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedOption('In-Person Handoff')} style={[styles.deliveryBackground, selectedOption === 'In-Person Handoff' && styles.activeOption]} >
                <Text style={[styles.deliveryText, selectedOption === 'In-Person Handoff' && styles.activeOptionText]}>In-Person Handoff</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedOption('Meet Outside House')} style={[styles.deliveryBackground, selectedOption === 'Meet Outside House' && styles.activeOption]} >
                <Text style={[styles.deliveryText, selectedOption === 'Meet Outside House' && styles.activeOptionText]}>Meet Outside House</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Add Instructions */}
          <View style={styles.labelRow}>
            <Text style={styles.label}>Add Instructions</Text>
          </View>
          <View style={styles.inputContainerDark}>
            <TextInput placeholderTextColor={'rgba(0, 43, 91, 0.40)'} style={styles.input} placeholder="Type Something Here" />
          </View>
        </View>

        {/* Save and Use Button */}
        <TouchableOpacity style={styles.saveButtonDark}>
          <Ionicons name="ios-checkmark-circle" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Save and Use</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 20,
    marginBottom: 18,
    fontFamily: 'Manrope-Medium',
  },
  imageContainer: {
    width: '100%',
    height: 170,
    marginBottom: 15,
    position: 'relative',
    alignItems: 'center',
  },
  map: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  buttomImage: {
    position: 'absolute',
    bottom: -10,
    width: '60%',
    height: '20%',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#002B5B',
    borderWidth: 1,
  },
  pinLocationText: {
    fontFamily: 'Manrope-Medium',
    marginStart: 5,
    fontSize: 13,
    color: '#002B5B',
  },
  cardDetailsContainer: {
    width: '100%',
    paddingVertical: 10,
    // marginBottom: 20,
  },
  deliveryBackground: {
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#EFF2F5',
    marginRight: 10,
    paddingHorizontal: 20,
  },
  activeOption: {
    backgroundColor: '#46505D',
  },
  deliveryText: {
    color: '#46505D',
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
  },
  activeOptionText: {
    color: '#FAFAFA',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 11,
    fontFamily: 'Manrope-Medium',
    color: '#002B5B',
  },
  inputContainer: {
    backgroundColor: '#EFF2F5',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 10,
  },
  inputContainerDark: {
    backgroundColor: 'rgba(0, 43, 91, 0.10);',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 10,
  },
  input: {
    fontSize: 14,
    // color: 'black',
  },
  saveButtonDark: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F86F03',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontFamily: 'Manrope-Medium',
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
});

export default EditAddressScreen;
