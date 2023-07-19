import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import ResturantWithPricesCard from '../../components/ResturantWithPricesCard';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const LunchDinnerMenu = () => {

    const [index, setIndex] = useState(0);

    const FirstRoute = () => {
        return (
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

        )
    };

    const SecondRoute = () => {
        return (
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

        )
    };

    const ThirdRoute = () => {
        return (
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

        )
    };

    const FourthRoute = () => {
        return (
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

        )
    };

    const routes = [
        { key: 'first', title: "Today's Deals" },
        { key: 'second', title: 'Burger Meals' },
        { key: 'third', title: 'Chicken & Fish' },
        { key: 'fourth', title: 'Beverages' }
    ];

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
    });

    return (
        <>
            <View style={{ flex: 1 }}>
                <TabView
                    style={{}}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={(props) => (
                        <TabBar
                            {...props}
                            // renderLabel={({ route, focused }) => (
                            //     <View style={[styles.labelContainer, focused && styles.activeLabel]}>
                            //         <Text style={styles.label}>{route.title}</Text>
                            //     </View>
                            // )}
                            style={styles.headerContainer}
                            activeColor='green'
                            scrollEnabled={true}
                            renderLabel={({ route, focused }) => (
                                <View style={[styles.tabBarItem, focused && styles.activeTab]}>
                                    <Text style={[styles.tabBarLabel, focused && styles.activeLabel]}>{route.title}</Text>
                                </View>
                            )}
                            tabStyle={{ marginHorizontal: 5, width: 'auto' }}
                            // indicatorContainerStyle={{ backgroundColor: '#fff' }}
                            // inactiveColor='#2D3943'
                            // labelStyle={{ textTransform: 'none', fontSize: 13, fontFamily: 'Manrope-Regular', }}
                            indicatorStyle={{ display: 'none' }}
                        />
                    )}
                />
            </View>
        </>
    )
}

export default LunchDinnerMenu

const styles = StyleSheet.create({
    subScreen: {
        flex: 1,
    },
    Container: {
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: '#fff',
        paddingBottom: 90,
    },
    CategoriesContainer: {
        alignItems: "center",
        height: 50,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'rgba(179, 191, 203, .6)',
    },
    Categories: {
        paddingHorizontal: 20,
    },
    category: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: '100%',
    },
    headerContainer: {
        height: 60,
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    categoryText: {
        fontFamily: 'Manrope-Regular',
        color: 'rgba(179, 191, 203, 1)',
    },
    activeCategoryText: {
        fontFamily: 'Manrope-Regular',
        color: '#292D32',
    },
    labelContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarItem: {
        backgroundColor: '#EFF2F5',
        borderRadius: 30,
        width: 120,
        // width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
    },
    activeTab: {
        backgroundColor: '#46505D',
    },
    tabBarLabel: {
        textTransform: 'none', fontSize: 13, fontFamily: 'Manrope-Regular',
    },
    activeLabel: {
        color: '#EFF2F5',
    },
})