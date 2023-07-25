import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const Snacks = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.cardContainer}>
                <View style={styles.upperPart}>
                    <Image style={styles.logo} source={require('../../assets/mcdonalds.png')} />
                    <View style={styles.textContainer}>
                        <Text style={styles.heading}>McDonald's</Text>
                        <View style={styles.subHeadContainer}>
                            <View>
                                <Ionicons name="location-sharp" size={16} color="#B3BFCB" />
                            </View>
                            <View style={{ width: 120 }}>
                                <Text style={styles.subHead}>
                                    Bramlea & Sandalwood
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.favouritesContainer}>
                        <Ionicons name="heart" size={24} color="#B3BFCB" />
                    </View>
                </View>
                <Divider style={{ marginTop: 15, marginBottom: 5 }} />
                <View style={styles.middlePart}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/route-square.png')} />
                        <View>
                            <Text style={{ fontSize: 12 }}>200</Text>
                            <Text style={{ fontSize: 12 }}>m</Text>
                        </View>
                    </View>
                    <View style={styles.verticalDivider}></View>
                    <View style={styles.ratingPart}>
                        <AntDesign name="star" size={18} color="#EA985B" />
                        <AntDesign name="star" size={18} color="#EA985B" />
                        <AntDesign name="star" size={18} color="#EA985B" />
                        <AntDesign name="star" size={18} color="#EA985B" />
                        <AntDesign name="star" size={18} color="#D5DEE7" />
                        <Text style={styles.rating} >(1,293)</Text>
                    </View>
                    <View style={styles.status} >
                        <Text style={styles.statusText}>open</Text>
                    </View>
                </View>
                <View style={styles.bottomPart}>
                    <Image source={require('../../assets/item2.png')} />
                    <Image source={require('../../assets/item2.png')} />
                    <Image source={require('../../assets/item2.png')} />
                    <Image source={require('../../assets/item2.png')} />
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Snacks

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
        // paddingHorizontal: 10,
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