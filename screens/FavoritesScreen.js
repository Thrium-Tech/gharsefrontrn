import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import BottomNavbar from '../components/BottomNavbar'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import ResturantCard from '../components/ResturantCard';
import ResturantItemCard from '../components/ResturantItemCard';
import ResturantWithPricesCard from '../components/ResturantWithPricesCard';

const FavoritesScreen = ({ navigation }) => {


    return (
        <View style={styles.container} >

            <AppHeader screen={'Favorites'} isMainScreen={true} />

            <View style={styles.subScreen}>
                <>
                    <ScrollView contentContainerStyle={styles.Container}>
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"BBQ Chicken Burger"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                        <ResturantWithPricesCard itemName={"Classic Cheese Burger (400 Cals)"} brand={"KFC"} actualPrice={5.89} discountedPrice={4.59} />
                    </ScrollView>
                </>
            </View>

            <BottomNavbar screen={'Favorites'} />
        </View>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    topPart: {
        paddingHorizontal: 30,
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'Manrope-Regular',
        paddingHorizontal: 10,
        fontSize: 30,
        color: '#002B5B',
        fontWeight: 400,
    },
    searchContainer: {
        paddingVertical: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF6F4',
        paddingHorizontal: 20,
        borderRadius: 15,
        width: '100%',
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 65,
        color: '#002B5B',
        fontFamily: 'Manrope-Regular',
        color: '#002B5B',
    },
    filters: {
        height: 50,
        backgroundColor: '#FFF6F4',
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 15,
        marginStart: 20,
    },
    filterText: {
        color: '#002B5B',
        fontFamily: 'Manrope-Medium',
    },
    subScreen: {
        flex: 1,
    },

    searchRecentlyContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
    },
    searchRecentlyText: {
        color: '#002B5B',
        fontFamily: 'Manrope-Medium',
        fontSize: 17,
    },
    clear: {
        marginRight: 12,
    },
    clearText: {
        fontFamily: 'Manrope-Medium',
        textTransform: 'uppercase',
        fontSize: 11,
        color: '#F86F03',
    },
    Container: {
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: '#FAFAFA',
        paddingBottom: 90,
    },


})