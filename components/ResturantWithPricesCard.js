import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import React from 'react'

const ResturantWithPricesCard = ({itemName, actualPrice, discountedPrice}) => {

    return (
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.upperPart}>
                <Image style={styles.item} source={require('../assets/kfcBurger.png')} />
                <View style={styles.textContainer}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.subHeading}>{itemName}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.actualPrice} >${actualPrice}</Text>
                        <Text style={styles.discountedPrice} >${discountedPrice}</Text>
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

export default ResturantWithPricesCard

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
    item: {
        height: 30,
        width: 70,
    },
    textContainer: {
        marginLeft: 0,
    },
    subHeading: {
        fontFamily: 'Manrope-Regular',
        fontSize: 16,
        color: 'black',
        width: 200,
        maxHeight: 60,
        lineHeight: 22,
    },
    priceContainer: {
        flexDirection: 'row',
        paddingVertical: 2,
        justifyContent: 'space-between',
        width: 120,
        alignItems: 'center',
    },
    actualPrice: {
        fontSize: 15,
        fontFamily: 'Manrope-Regular',
        textDecorationLine: 'line-through',
    },
    discountedPrice: {
        fontSize: 15,
        fontFamily: 'Manrope-Medium',
        color: '#45B8E9',
    },
})