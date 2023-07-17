import React, { useState, useRef } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Animated, ScrollView, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Meals from './subScreens/Meals';
import Breakfast from './subScreens/Breakfast';
import Snacks from './subScreens/Snacks';
import Lunch from './subScreens/Lunch';
import BottomNavbar from '../components/BottomNavbar';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [index, setIndex] = useState(0);

    const [fontsLoaded] = useFonts({
        'Manrope-Regular': require('../assets/fonts/Manrope-Regular.ttf'),
        'Manrope-Medium': require('../assets/fonts/Manrope-Medium.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf')
    });

    if (!fontsLoaded) {
        return (<></>);
    }

    const FirstRoute = () => (
        <Meals />
    );

    const SecondRoute = () => (
        <Breakfast />
    );

    const ThirdRoute = () => (
        <Lunch />
    )

    const FourthRoute = () => {
        <Snacks />
    }

    const routes = [
        { key: 'first', title: 'Meals' },
        { key: 'second', title: 'Breakfast' },
        { key: 'third', title: 'Lunch' },
        { key: 'fourth', title: 'Snacks' }
    ];

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
    });

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <AntDesign name="menuunfold" size={24} color="#002B5B" />
                </TouchableOpacity>
                <View style={styles.locationContainer} >
                    <Octicons name="location" size={20} color="#002B5B" />
                    <Text style={styles.locationText}>Rd.no 2,Begumpet</Text>
                </View>
                <TouchableOpacity >
                    <SimpleLineIcons name="handbag" size={24} color="#002B5B" />
                </TouchableOpacity>
            </View>
            <View style={styles.topPart}>
                <Text style={styles.heading}>Good afternoon, Hemant</Text>
                <View style={styles.searchContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.searchBar}>
                            <Ionicons name="search" size={24} color="#002B5B" style={styles.searchIcon} />
                            <TextInput
                                placeholderTextColor="rgba(0, 43, 91, 0.5)"
                                style={styles.input}
                                placeholder="Search"
                                onChangeText={(text) => { setSearchQuery(text) }}
                                value={searchQuery}
                            />
                        </View>
                        <TouchableOpacity style={styles.searchTime}>
                            <FontAwesome5 name="clock" size={22} color="#002B5B" />
                            <Text style={styles.searchTimeText}>Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.subScreenPart}>
                <TabView
                    style={{}}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={(props) => (
                        <TabBar
                            {...props}
                            style={{ backgroundColor: '#FAFAFA', }}
                            activeColor='#F86F03'
                            indicatorContainerStyle={{}}
                            inactiveColor='#9A9A9D'
                            labelStyle={{ textTransform: 'none', fontSize: 12, }}
                            indicatorStyle={{ backgroundColor: '#F86F03', height: 3, }}
                        />
                    )}
                />
            </View>
            <BottomNavbar />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
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
    },
    topPart: {
        paddingHorizontal: 20,
    },
    heading: {
        fontFamily: 'WorkSans-Light',
        paddingHorizontal: 10,
        fontSize: 28,
        color: '#002B5B',
        fontWeight: 400,
    },
    searchContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF6F4',
        paddingHorizontal: 20,
        // paddingVertical: 12,
        borderRadius: 15,
        width: '72%',
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
    searchTime: {
        height: 65,
        backgroundColor: '#FFF6F4',
        width: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 15,
        marginStart: 20,
    },
    searchTimeText: {
        color: '#002B5B',
    },
    subScreenPart: {
        flex: 1,
    }
})