import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import BottomNavbar from '../components/BottomNavbar'
import AppHeader from '../components/AppHeader';
import { Divider } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


const ProfileScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <AppHeader screen={'Profile'} />
      <View style={styles.rowContainer}>
        <Text style={styles.heading}>Personal details</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Edit Details') } >
          <Text style={styles.editText}>Edit details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.profileImageContainer}>
          {/* Replace the source with the provided profile image */}
          <Image
            style={styles.profileImage}
            source={require('../assets/pfp.png')}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsHead}>Hemanth Bhailikar</Text>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.detailsEmail}>promantra555@gmail.com</Text>
          <Divider style={{ paddingTop: 4, marginBottom: 5 }} />
          <Text style={styles.detailsPhone}>+234 9011039271</Text>
          <Divider style={{ paddingTop: 4, marginBottom: 5 }} />
          <Text numberOfLines={3} ellipsizeMode='tail' style={styles.address}>No 15 uti street off ovie palace road effurun delta state</Text>
        </View>
      </View>

      <View style={{ flex: 1, }}>
        <ScrollView contentContainerStyle={{paddingBottom: 85}} >
          <View style={styles.cardButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Edit Address') } style={styles.buttonsContainer}>
              <Text style={styles.buttonText}>Address</Text>
              <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardButton}>
            <TouchableOpacity onPress={() => {navigation.navigate('Payment Methods')}} style={styles.buttonsContainer}>
              <Text style={styles.buttonText}>Payment Methods</Text>
              <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardButton}>
            <TouchableOpacity style={styles.buttonsContainer}>
              <Text style={styles.buttonText}>Reviews</Text>
              <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardButton}>
            <TouchableOpacity style={styles.buttonsContainer}>
              <Text style={styles.buttonText}>Help</Text>
              <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <BottomNavbar screen={'Profile'} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    // paddingVertical: 5,
  },
  heading: {
    fontSize: 18,
    color: '#002B5B',
    fontFamily: 'Manrope-Medium',
  },
  editText: {
    color: 'orange',
    fontSize: 14,
    fontFamily: 'Manrope-Medium',
  },
  cardContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    // Add margin of 20 from all sides
    margin: 20,
  },
  profileImageContainer: {
    width: 79,
    height: 82,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    width: '72%',
  },
  detailsHead: {
    fontSize: 16,
    fontFamily: 'Manrope-Medium',

  },
  detailsEmail: {
    fontSize: 13,
    fontFamily: 'Manrope-Regular',
    color: '#141414',
    opacity: 0.5,
  },
  detailsPhone: {
    fontSize: 13,
    fontFamily: 'Manrope-Regular',
    color: '#141414',
    opacity: 0.5,
  },
  address: {
    fontSize: 13,
    fontFamily: 'Manrope-Regular',
    color: '#141414',
    opacity: 0.5,
    width: '100%',
    height: 65,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  cardButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    // Add margin of 20 from all sides
    margin: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 17,
    fontFamily: 'Manrope-Medium',
  }
});

export default ProfileScreen;
