import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import React, { useState, useRef } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


const BottomNavbar = ({ screen }) => {

    const navigation = useNavigation();
    const route = useRoute();
    const [activeScreen, setActiveScreen] = useState()
    const [coinsAvailable, setCoinsAvailable] = useState(100);
    const myCoins = useRef(100);


    return (

        <View style={styles.navContainer}>
            <View style={styles.navBottom} >
                <TouchableOpacity style={styles.navButtonHandler} onPress={() => { navigation.navigate('Home',) }}>
                    <AntDesign name="home" size={25} color="#FAFAFA" />
                    <Text style={styles.text}>Home</Text>
                    <Text style={{display: screen === 'Home' ? 'flex' : 'none'}}><Octicons name="dot-fill" size={8} color="#fff" /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButtonHandler} onPress={() => navigation.navigate('Favorites')} >
                    <AntDesign name="hearto" size={24} color="#FAFAFA" />
                    <Text style={styles.text}>Favorites</Text>
                    <Text style={{display: screen === 'Favorites' ? 'flex' : 'none'}}><Octicons name="dot-fill" size={8} color="#fff" /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButtonHandler} onPress={() => { navigation.navigate('Discover',) }}>
                    <SimpleLineIcons name="magnifier" size={24} color='#FAFAFA' />
                    <Text style={styles.text}>Discover</Text>
                    <Text style={{display: screen === 'Discover' ? 'flex' : 'none'}}><Octicons name="dot-fill" size={8} color="#fff" /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButtonHandler} onPress={() => navigation.navigate('Orders')}>
                    <Ionicons name="receipt-outline" size={24} color="#FAFAFA" />
                    <Text style={styles.text}>Orders</Text>
                    <Text style={{display: screen === 'Orders' ? 'flex' : 'none'}}><Octicons name="dot-fill" size={8} color="#fff" /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButtonHandler} onPress={() => navigation.navigate('Profile')}>
                    {/* <Ionicons name="Profile-outline" size={30} color={screen === 'Profile' ? '#FAFAFA' : '#999999'} /> */}
                    <Ionicons name="ios-person-circle-outline" size={26} color="#FAFAFA" />
                    <Text style={styles.text}>Profile</Text>
                    <Text style={{display: screen === 'Profile' ? 'flex' : 'none'}}><Octicons name="dot-fill" size={8} color="#fff" /></Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    navContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 2,
        marginRight: 7,
    },
    navBottom: {
        flexDirection: 'row',
        width: '97%',
        height: 80,
        borderRadius: 15,
        // borderTopEndRadius: 20,
        // borderTopStartRadius: 20,
        backgroundColor: '#002B5B',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navButtonHandler: {
        alignItems: 'center',
    },
    text: {
        marginTop: 3,
        fontSize: 10,
        fontFamily: 'Manrope-Regular',
        color: '#FAFAFA'
    },
});

export default BottomNavbar;