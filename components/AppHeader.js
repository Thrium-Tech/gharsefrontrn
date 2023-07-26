import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AppHeader = ({ screen }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={{padding: 10, paddingLeft: 0}} onPress={() => navigation.openDrawer()}>
                <AntDesign name="menuunfold" size={24} color="#002B5B" />
            </TouchableOpacity>
            {screen === undefined && <View style={styles.locationContainer} >
                <Octicons name="location" size={20} color="#002B5B" />
                <Text style={styles.locationText}>Rd.no 2,Begumpet</Text>
            </View>}
            {screen == 'Favorites' && <View style={styles.locationContainer} >
                <AntDesign name="hearto" size={20} color="#002B5B" />
                <Text style={styles.locationText}>Your favorites</Text>
            </View>}
            {screen == 'Profile' && <View style={styles.locationContainer} >
                <Text style={styles.locationText}>Profile</Text>
            </View>}
            <TouchableOpacity onPress={() => navigation.navigate('Cart') } style={{padding: 10, paddingLeft: 0}}  >
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