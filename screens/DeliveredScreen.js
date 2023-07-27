import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import BottomNavbar from '../components/BottomNavbar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: '#002B5B',
    fontFamily: 'Manrope-Bold',
    fontSize: 26,
    marginVertical: 10,
    textAlign: 'center'

  },
  smallTextView: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20
  },
  smallText: {
    color: '#292D32',
    fontSize: 13,
    fontFamily: "Manrope-Regular",
  }

});

const DeliveredScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <AppHeader isMainScreen={false} navigation={navigation} />
      <Text style={styles.heading}> {'Your Favourite Food,\nDelivered Fast'} </Text>
      <View style={styles.smallTextView}><Text style={styles.smallText}>Thank you for ordering with us.</Text></View>
      <Image
        source={require('../assets/DeliveryRider.png')}

      />
      <BottomNavbar />
    </View>
  );
};

export default DeliveredScreen;