import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import ResturantItemComponent from '../../components/ResturantItemComponent';

const Meals = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ResturantItemComponent />
            <ResturantItemComponent />
            <ResturantItemComponent />
        </ScrollView>
    )
}

export default Meals

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: '#FAFAFA',
        paddingBottom: 90,
    },
    cardContainer: {
        backgroundColor: '#ffffff',
        width: '95%',
        paddingHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 20,
        borderRadius: 10,
    },
    upperPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        height: 50,
        width: 50,
    },
    textContainer: {
        marginRight: 40,
    },
    heading: {
        fontFamily: 'Manrope-Regular',
        fontSize: 17,
    },
    subHeadContainer: {
        flexDirection: 'row',
    },
    subHead: {
        color: '#B3BFCB',
        fontSize: 12,
    },
    favouritesContainer: {
        backgroundColor: '#EFF2F5',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middlePart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    verticalDivider: {
        width: 1,
        height: 30,
        backgroundColor: '#D5DEE7',
        // marginHorizontal: 15,
    },
    ratingPart: {
        flexDirection: 'row',
        marginRight: 25,
    },
    rating: {
        color: '#B3BFCB',
        fontSize: 12,
    },
    statusText: {
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#28B996',
    },
    bottomPart: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})