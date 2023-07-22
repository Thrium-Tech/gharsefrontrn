import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import your screen components
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DrawerComponent from './components/DrawerComponent';
import SearchHomeScreen from './screens/SearchHomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ResturantMenuScreen from './screens/ResturantMenuScreen';
import RestaurantSearch from './screens/RestaurantSearch';
import EditAddonScreen from './screens/EditAddonScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import EditCardDetailsScreen from './screens/EditCardDetailsScreen';r
// Import other screen components as needed

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerComponent {...props} />}
        >
            <Drawer.Screen name="Edit Card Details Screen" component={EditCardDetailsScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Payment Methods" component={PaymentMethodScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Edit Add-on" component={EditAddonScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Resturant search" component={RestaurantSearch} options={{ headerShown: false }} />
            <Drawer.Screen name="Resturant menu" component={ResturantMenuScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Discover" component={DiscoverScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Search home" component={SearchHomeScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
