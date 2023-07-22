import React, { useState, useRef } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Animated, ScrollView, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Meals from './subScreens/Meals';
import Breakfast from './subScreens/Breakfast';
import Snacks from './subScreens/Snacks';
import Lunch from './subScreens/Lunch';
import BottomNavbar from '../components/BottomNavbar';
import AppHeader from '../components/AppHeader';
import DateTimePicker from 'react-native-modal-datetime-picker';

const HomeScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [index, setIndex] = useState(0);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState("Now");
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // format the date as you want here:
        const timeString = `${date.getHours()}:${date.getMinutes()}`;
        setSelectedTime(timeString);
        hideDatePicker();
    };

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
            <AppHeader navigation={navigation} />
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
                        <TouchableOpacity style={styles.searchTime} onPress={showDatePicker}>
                            <FontAwesome5 name="clock" size={22} color="#002B5B" />
                            <Text style={styles.searchTimeText}>{selectedTime}</Text>
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
            <BottomNavbar screen={'Home'} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
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