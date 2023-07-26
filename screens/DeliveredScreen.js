import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import BottomNavbar from '../components/BottomNavbar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color:'#002B5B',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center'
   
  },
  smallTextView: {
    alignItems:'center'
  },
  smallText: {
    color:'#292D32',
    fontSize: 14,
    marginBottom: 20
  }

});

const DeliveredScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <AppHeader   navigation={navigation} />
      <Text style={styles.heading}> {'Your Favourite Food,\nDelivered Fast'} </Text>
     <View style={styles.smallTextView}><Text style={styles.smallText}>Thank you for ordering with Us</Text></View> 
      <Image
        source={require('../assets/DeliveryRider.png')} // Replace with your image source
        
      />
       <BottomNavbar />
    </View>
  );
};

export default DeliveredScreen;