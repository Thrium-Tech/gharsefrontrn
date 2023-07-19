import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import React from 'react'

const ResturantCard = ({name, location}) => {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.upperPart}>
                <Image style={styles.logo} source={require('../assets/mcdonalds.png')} />
                <View style={styles.textContainer}>
                    <Text style={styles.subHeading}>{name}</Text>
                    <View style={styles.subHeadContainer}>
                        <View style={{}}>
                            <Text style={styles.subHead}>
                                {location}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.favouritesContainer}>
                    <AntDesign name="right" size={20} color="#292D32" />
                </View>
            </View>
            <Divider style={{ marginTop: 15, marginBottom: 0 }} />
        </TouchableOpacity>
    )
}

export default ResturantCard

const styles = StyleSheet.create({
    cardContainer: {
        width: '95%',
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
    },
    upperPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        height: 40,
        width: 40,
    },
    textContainer: {
        // marginRight: 40,
    },
    subHeading: {
        fontFamily: 'Manrope-Regular',
        fontSize: 16,
        color: '#002B5B',
    },
    subHeadContainer: {
        flexDirection: 'row',
    },
    subHead: {
        color: '#292D32',
        opacity: .6,
        fontFamily: 'Manrope-Regular',
        fontSize: 11,
    },
    favouritesContainer: {
        // height: 50,
        // width: 50,
        // borderRadius: 25,
        // alignItems: 'center',
        // justifyContent: 'center',
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