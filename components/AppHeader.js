import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const AppHeader = ({ navigation, screen }) => {
    const [address, setAddress] = useState('Your location');

    const fetchLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission to access location was denied');
          return;
        }
        
        let location = await Location.getCurrentPositionAsync({});
        console.log('location is requested by header',location);
        let reverseGeocode = await Location.reverseGeocodeAsync(location.coords);
        // console.log('reverseGeocode is requested by header',reverseGeocode);
        // if (reverseGeocode && reverseGeocode.length > 0) {
        //   let foundAddress = reverseGeocode.find(address => address.street && address.city);
        //   if(foundAddress) {
        //       setAddress(`${foundAddress.street}, ${foundAddress.city}`);
        //   } else {
        //       setAddress('Location not found');
        //   }
        // }
        setAddress(`${reverseGeocode[0].name}, ${reverseGeocode[0].city}`);
      };

    useEffect(() => {
        fetchLocation();
    }, []);

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={{padding: 10, paddingLeft: 0}} onPress={() => navigation.openDrawer()}>
                <AntDesign name="menuunfold" size={24} color="#002B5B" />
            </TouchableOpacity> 
            {screen === undefined && <TouchableOpacity onPress={fetchLocation} style={styles.locationContainer}>
                <Octicons name="location" size={20} color="#002B5B" />
                <Text style={styles.locationText}>{address}</Text>
            </TouchableOpacity>}

            {screen == 'Favorites' && <View style={styles.locationContainer} >
                <AntDesign name="hearto" size={20} color="#002B5B" />
                <Text style={styles.locationText}>Your favorites</Text>
            </View>}
            {screen == 'Profile' && <View style={styles.locationContainer} >
                <Text style={styles.locationText}>Profile</Text>
            </View>}
            <TouchableOpacity style={{padding: 10, paddingLeft: 0}}  >
                <SimpleLineIcons name="handbag" size={24} color="#002B5B" />
            </TouchableOpacity>
        </View>

    )
}

export default AppHeader

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF6F4',
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    locationText: {
        marginLeft: 5,
        color: '#002B5B',
        fontFamily: 'Manrope-Regular',
    },
})