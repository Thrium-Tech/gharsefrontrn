import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';

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
                <Divider style={{ marginTop: 10, marginBottom: 5 }} />
                <DrawerItem
                    label="orders"
                    labelStyle={styles.drawerItem}
                    icon={() => (
                        <View style={styles.iconContainer}>
                            <Ionicons name="ios-person-circle-outline" size={26} color="#FAFAFA" />
                        </View>
                    )}
                    onPress={() => {
                    }}

                />
                <Divider style={{ marginTop: 10, marginBottom: 5 }} />
                <DrawerItem
                    label="Offer and Promo"
                    labelStyle={styles.drawerItem}
                    icon={() => (
                        <View style={styles.iconContainer}>
                            <Ionicons name="ios-person-circle-outline" size={26} color="#FAFAFA" />
                        </View>
                    )}
                    onPress={() => {
                    }}

                />
                <Divider style={{ marginTop: 10, marginBottom: 5 }} />
                <DrawerItem
                    label="Privacy Policy"
                    labelStyle={styles.drawerItem}
                    icon={() => (
                        <View style={styles.iconContainer}>
                            <Ionicons name="ios-person-circle-outline" size={26} color="#FAFAFA" />
                        </View>
                    )}
                    onPress={() => {
                    }}

                />
                  <Divider style={{ marginTop: 10, marginBottom: 5 }} />
                  <DrawerItem
                    label="Security"
                    labelStyle={styles.drawerItem}
                    icon={() => (
                        <View style={styles.iconContainer}>
                            <Ionicons name="ios-person-circle-outline" size={26} color="#FAFAFA" />
                        </View>
                    )}
                    onPress={() => {
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