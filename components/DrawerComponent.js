import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { supabase } from "../initSupabase";

const DrawerComponent = (props) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={styles.drawerContent}
            >
                {/* Custom Drawer Items */}
                {/* <DrawerItemList {...props} /> */}
                {/* Custom Drawer Item */}
                <DrawerItem
                    label="Profile"
                    labelStyle={styles.drawerItem}
                    icon={() => (
                        <View style={styles.iconContainer}>
                            <Ionicons name="ios-person-circle-outline" size={26} color="#FAFAFA" />
                        </View>
                    )}
                    onPress={() => {
                    }}

                />
                <Divider style={{ marginTop: 10, marginBottom: 5 , marginLeft:60, maxWidth:150}} />
                <DrawerItem 
                    label="orders"
                    labelStyle={styles.drawerItem}
                    icon={() => (
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="cart-arrow-down" size={26} color="#FAFAFA" />
                        </View>
                    )}
                    onPress={() => {
                    }}

                />
                <Divider style={{ marginTop: 10, marginBottom: 5 , marginLeft:60, maxWidth:150}} />
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
                <Divider style={{ marginTop: 10, marginBottom: 5 , marginLeft:60, maxWidth:150}} />
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
                  <Divider style={{ marginTop: 10, marginBottom: 5, marginLeft:60, maxWidth:150 }} />
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
                <Divider style={{ marginTop: 10, marginBottom: 5, marginLeft:60, maxWidth:150 }} />
                  <DrawerItem
                    label="Logout"
                    labelStyle={styles.drawerItem}
                    icon={() => (
                        <View style={styles.iconContainer}>
                             <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/menu_securityIcon.png')} />
                        </View>
                    )}
                    onPress={async () => {
                        await supabase.auth.signOut();
                    }}

                />
            </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002B5B',
    },
    drawerContent: {
        flex: 1,
        justifyContent: 'center',
        borderRadius:20
    },
    drawerItem: {
        color: '#fff',
    },
    iconContainer: {
        marginRight: -5,
    }
});

export default DrawerComponent;