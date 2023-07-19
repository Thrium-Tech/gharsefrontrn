import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditCreditCardScreen = () => {
  // Replace this with the path to your image or require the image using require()
//   const mapImage = require('./path/to/your/map_image.png');

  return (
    <View style={styles.container}>
      {/* Edit Card Details Heading */}
      <Text style={styles.heading}>Edit Card Details</Text>

      {/* Image View */}
      <View style={styles.imageContainer}>
        {/* <Image source={mapImage} style={styles.image} /> */}
      </View>

      {/* Credit Card Details */}
      <View style={styles.cardDetailsContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.label}>Card Number</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="1234 5678 9012 3456" />
        </View>

        <View style={styles.labelRow}>
          <Text style={styles.label}>Card Holder Name</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="John Doe" />
        </View>

        <View style={styles.labelRow}>
          <Text style={styles.label}>Expiry Date</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="MM/YY" />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* CVV */}
        <View style={styles.labelRow}>
          <Text style={styles.label}>CVV</Text>
        </View>
        <View style={styles.inputContainerDark}>
          <TextInput style={styles.input} placeholder="123" />
        </View>
      </View>

      {/* Save and Use Button */}
      <TouchableOpacity style={styles.saveButtonDark}>
        <Ionicons name="ios-checkmark-circle" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Save and Use</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    margin: 10, // Add padding throughout the screen
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start', // Align heading to the left
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 2, // To make it half the height of the map
    marginBottom: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  cardDetailsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  inputContainerDark: {
    backgroundColor: '#363636', // Dark grey background for CVV
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  saveButtonDark: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4500', // Dark orange button color
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
});

export default EditCreditCardScreen;
