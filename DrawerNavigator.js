import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import your screen components
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DrawerComponent from './components/DrawerComponent';
// Import other screen components as needed

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerComponent {...props} />}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
