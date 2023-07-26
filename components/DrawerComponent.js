import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { supabase } from "../initSupabase";
import { useNavigation, useRoute } from '@react-navigation/native';


const DrawerComponent = (props) => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            {/* <StatusBar  /> */}
            <View style={styles.drawerWrapper}>
                <DrawerContentScrollView {...props}
                    contentContainerStyle={styles.drawerContent}
                >
                    <View style={styles.midPart}>

                        <DrawerItem
                            label="Profile"
                            labelStyle={styles.drawerItem}
                            icon={() => (
                                <View style={styles.iconContainer}>
                                    <Ionicons name="ios-person-circle-outline" size={26} color="#FAFAFA" />
                                </View>
                            )}
                            onPress={() => { navigation.navigate('Profile')
                            }}

                        />
                        <Divider style={{ marginTop: 10, marginBottom: 5, marginLeft: 60, maxWidth: 150 }} />
                        <DrawerItem
                            label="Orders"
                            labelStyle={styles.drawerItem}
                            icon={() => (
                                <View style={styles.iconContainer}>
                                    <MaterialCommunityIcons name="cart-arrow-down" size={26} color="#FAFAFA" />
                                </View>
                            )}
                            onPress={() => { navigation.navigate('Orders')
                            }}

                        />
                        <Divider style={{ marginTop: 10, marginBottom: 5, marginLeft: 60, maxWidth: 150 }} />
                        <DrawerItem
                            label="Offer and Promo"
                            labelStyle={styles.drawerItem}
                            icon={() => (
                                <View style={styles.iconContainer}>
                                    <MaterialIcons name="local-offer" size={26} color="#FAFAFA" />
                                </View>
                            )}
                            onPress={() => {
                            }}

                        />
                        <Divider style={{ marginTop: 10, marginBottom: 5, marginLeft: 60, maxWidth: 150 }} />
                        <DrawerItem
                            label="Privacy Policy"
                            labelStyle={styles.drawerItem}
                            icon={() => (
                                <View style={styles.iconContainer}>
                                    <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/menu_policyIcon.png')} />
                                </View>
                            )}
                            onPress={() => {

                            }}

                        />
                        <Divider style={{ marginTop: 10, marginBottom: 5, marginLeft: 60, maxWidth: 150 }} />
                        <DrawerItem
                            label="Security"
                            labelStyle={styles.drawerItem}
                            icon={() => (
                                <View style={styles.iconContainer}>
                                    <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/menu_securityIcon.png')} />
                                </View>
                            )}
                            onPress={() => {
                            }}

                        />
                    </View>

                    <View style={styles.botPart} >
                        <DrawerItem
                            label=""
                            style={{ marginBottom: 40, }}
                            labelStyle={styles.drawerItem}
                            icon={() => (
                                <View style={styles.signOutContainer}>
                                    <Text style={styles.drawerItem}>Sign-out</Text>
                                    <AntDesign style={{ paddingLeft: 10 }} name="arrowright" size={26} color="#fafafa" />
                                </View>
                            )}
                            onPress={async () => {
                                await supabase.auth.signOut();
                            }}
                        />
                    </View>
                </DrawerContentScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'transparent'
    },
    drawerWrapper: {
        backgroundColor: '#002B5B',
        // borderTopRightRadius: 30, // Adjust as needed
        // borderBottomRightRadius: 30, // Adjust as needed
        flex: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Add this line to show shadow on Android
        overflow: 'hidden',
    },
    drawerContent: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    midPart: {
    },
    botPart: {
        height: '40%',
        justifyContent: 'flex-end',

    },
    drawerItem: {
        color: '#fff',
        fontWeight: 700,
    },
    iconContainer: {
        marginRight: -5,
    },
    signOutContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default DrawerComponent;