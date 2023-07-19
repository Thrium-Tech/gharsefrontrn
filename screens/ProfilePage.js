import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import BottomNavbar from '../components/BottomNavbar'

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.heading}>Personal Details</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.profileImageContainer}>
          {/* Replace the source with the provided profile image */}
          <Image
            style={styles.profileImage}
            source={require('../assets/logo.png')}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.value}>John Doe</Text>
          <Text style={styles.value}>+1 (123) 456-7890</Text>
          <Text style={styles.value}>johndoe@example.com</Text>
        </View>
      </View>

      {/* Card 2 */}
      <View style={styles.cardContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.value}>Text 1</Text>
          {/* Add other data as needed */}
        </View>
      </View>

      {/* Card 3 */}
      <View style={styles.cardContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.value}>Text 2</Text>
          {/* Add other data as needed */}
        </View>
      </View>

      {/* Card 4 */}
      <View style={styles.cardContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.value}>Text 3</Text>
          {/* Add other data as needed */}
        </View>
      </View>

     {/* Card 5 */}
     <View style={styles.cardContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.value}>Text 4</Text>
          {/* Add other data as needed */}
        </View>
      </View>

      <BottomNavbar />
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editText: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    // Add margin of 20 from all sides
    margin: 20,
  },
  profileImageContainer: {
    flex: 0.3,
    marginRight: 20,
  },
  profileImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 50,
  },
  detailsContainer: {
    flex: 0.7,
  },
  value: {
    marginBottom: 10,
  },
});

export default ProfilePage;
