import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color:'#002B5B',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center'
  },
  smallText: {
    color:'#292D32',
    fontSize: 14,
    marginBottom: 20,
  }

});

const Delivered = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> {'Your Favourite Food,\nDelivered Fast'} </Text>
      <Text style={styles.smallText}>Thank you for ordering with Us</Text>
      <Image
        source={require('../assets/DeliveryRider.png')} // Replace with your image source
        
      />
    </View>
  );
};

export default Delivered;