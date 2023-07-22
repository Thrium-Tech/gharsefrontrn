import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';
import { Divider } from 'react-native-elements';

const EditDetailsScreen = () => {
  // Replace this with the path to your image or require the image using require()
  //   const mapImage = require('./path/to/your/map_image.png');

  return (
    <View style={styles.container}>
      {/* Edit Card Details Heading */}
      <AppHeader />

      <View style={styles.contentContainer}>

        <Text style={styles.heading}>Edit Personal Details</Text>

        {/* Image View */}
        <View style={styles.imageContainer}>
          <Image source={require('../assets/CreditCard.jpg')} style={styles.image} />
          <View style={styles.buttomImage}>
            <Image source={require('../assets/visa.png')} style={styles.visaImage} />
          </View>
        </View>

        {/* Credit Card Details */}
        <View style={styles.cardDetailsContainer}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Card Number</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholderTextColor={'#B3BFCB'} style={styles.input} placeholder="Type Something Here" />
          </View>

          <View style={styles.labelRow}>
            <Text style={styles.label}>Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholderTextColor={'#B3BFCB'} style={styles.input} placeholder="Type Something Here" />
          </View>

          <View style={styles.labelRow}>
            <Text style={styles.label}>Age</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholderTextColor={'#B3BFCB'} style={styles.input} placeholder="MM/YY" />
          </View>

          {/* Divider */}
          <Divider style={{marginVertical: 5,}} />

          {/* CVV */}
          <View style={styles.labelRow}>
            <Text style={styles.label}>Address</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#002B5B',
    borderWidth: 1,
  },
  cardDetailsContainer: {
    width: '100%',
    paddingVertical: 10,
    // marginBottom: 20,
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

export default EditDetailsScreen;
