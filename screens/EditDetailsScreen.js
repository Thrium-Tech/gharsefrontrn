import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';
import { Divider } from 'react-native-elements';
import UploadImage from '../components/UploadImage';

const EditDetailsScreen = () => {

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPhoneValid, setPhoneValid] = useState(true);

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate phone number
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Function to handle the Save button press
  const handleSave = () => {
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);

    setEmailValid(isEmailValid);
    setPhoneValid(isPhoneValid);

    if (isEmailValid && isPhoneValid) {
      // Implement your logic to save the profile here
      // You can send the form data to the server or store it locally, as per your requirement.
      console.log('Profile saved successfully!');
    }
  };



  return (
    <View style={styles.container}>
      {/* Edit Card Details Heading */}
      <AppHeader isMainScreen={false} />

      <View style={styles.contentContainer}>

        <Text style={styles.heading}>Edit Personal Details</Text>

        <View style={{alignItems: 'center'}}>
          <UploadImage />
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} >
          {/* Credit Card Details */}
          <View style={styles.cardDetailsContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Name</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholderTextColor={'#B3BFCB'} style={styles.input} placeholder="Type Something Here" />
            </View>

            <View style={styles.labelRow}>
              <Text style={styles.label}>Address</Text>
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

            <View style={styles.labelRow}>
              <Text style={styles.label}>Email Address</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholderTextColor={'#B3BFCB'} keyboardType='email-address' value={email} onChangeText={setEmail} style={[styles.input, !isEmailValid && styles.invalidInput]} placeholder="Email ID" />
            </View>
            {!isEmailValid && (
              <Text style={styles.validationError}>Please enter a valid email</Text>
            )}

            <View style={styles.labelRow}>
              <Text style={styles.label}>Phone Number</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholderTextColor={'#B3BFCB'} value={phone} onChangeText={setPhone} keyboardType='numeric' style={[styles.input, !isPhoneValid && styles.invalidInput]} placeholder="Phone Number" />
            </View>
            {!isPhoneValid && (
              <Text style={styles.validationError}>Please enter a valid phone number</Text>
            )}
          </View>

          {/* Save and Use Button */}
          <TouchableOpacity onPress={() => handleSave()} style={styles.saveButtonDark}>
            <Ionicons name="ios-checkmark-circle" size={24} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Save and Use</Text>
          </TouchableOpacity>
        </ScrollView>

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
    flex: 1,
    marginHorizontal: 30,
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
  invalidInput: {
    borderColor: 'red',
  },
  validationError: {
    color: 'red',
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
});

export default EditDetailsScreen;

