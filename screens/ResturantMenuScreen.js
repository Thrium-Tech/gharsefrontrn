import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AppHeader from '../components/AppHeader'
import BottomNavbar from '../components/BottomNavbar'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import ResturantCard from '../components/ResturantCard';
import ResturantItemCard from '../components/ResturantItemCard';
import ResturantWithPricesCard from '../components/ResturantWithPricesCard';
import BreakFastMenu from './subScreens/BreakFastMenu';
import LunchDinnerMenu from './subScreens/LunchDinnerMenu';
import OverNightMenu from './subScreens/OverNightMenu';


const ResturantMenuScreen = ({ navigation }) => {

    const [index, setIndex] = useState(0);

    const FirstRoute = () => (
        <BreakFastMenu />
    );

    const SecondRoute = () => (
        <LunchDinnerMenu />
    );

    const ThirdRoute = () => (
        <OverNightMenu />
    )

    const routes = [
        { key: 'first', title: 'Breakfast Menu' },
        { key: 'second', title: 'Lunch & Dinner' },
        { key: 'third', title: 'Overnight Menu' },
    ];

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    return (
        <View style={styles.container} >

            <AppHeader navigation={navigation} />

            <View style={styles.upperPart}>
                <Image style={styles.logo} source={require('../assets/mcdonalds.png')} />
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>McDonald's</Text>
                    <View style={styles.subHeadContainer}>
                        <View>
                            <Ionicons name="location-outline" size={16} color="#292D32" />
                        </View>
                        <View style={styles.subHeadHandler}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subHead}>
                                Bramlea & Sandalwood
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.favouritesContainer}>
                    <Ionicons name="heart" size={24} color="#B3BFCB" />
                </View>
            </View>

            {/* <View style={styles.CategoriesContainer}>
                <ScrollView
                    style={styles.scrollView} horizontal contentContainerStyle={styles.Categories}>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText} >Breakfast Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.activeCategoryText} >Lunch & Dinner</Text>
                        <Divider style={{ width: '100%', height: 3, backgroundColor: 'black', position: 'absolute', bottom: 0 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText} >Overnight Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText} >Other Category</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View> */}

            <View style={styles.subScreenPart}>
                <TabView
                    style={{}}
                    swipeEnabled={false}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={(props) => (
                        <TabBar
                            {...props}
                            style={{ backgroundColor: '#EFF2F5', height: 60, justifyContent: 'center', }}
                            activeColor='#292D32'
                            tabStyle={{width: 'auto'}}
                            scrollEnabled={true}
                            indicatorContainerStyle={{ }}
                            inactiveColor='#B3BFCB'
                            labelStyle={{ textTransform: 'none', fontSize: 13, fontFamily: 'Manrope-Regular' }}
                            indicatorStyle={{ backgroundColor: '#292D32', height: 3, maxWidth: 120,  }}
                        />
                    )}
                />
            </View>

            {/* <BottomNavbar /> */}
        </View>
    )
}

export default ResturantMenuScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    upperPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    logo: {
        height: 50,
        width: 50,
    },
    textContainer: {
    },
    heading: {
        fontFamily: 'Manrope-Regular',
        fontSize: 17,
    },
    subHeadContainer: {
        flexDirection: 'row',
    },
    subHeadHandler: {
        width: 180,
    },
    subHead: {
        color: '#292D32',
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
    subScreenPart: {
        flex: 1,
    },
})