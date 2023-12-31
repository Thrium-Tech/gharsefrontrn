import React, {useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import { AuthContext } from './AuthProvider';
import { View, ActivityIndicator } from "react-native";
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
const Stack = createNativeStackNavigator();
const Auth = createNativeStackNavigator();

const StackNavigator = () => {

    const auth = useContext(AuthContext);
	const user = auth.user;

    if(user==null){
        return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="large"  />
            </View>
        )
    }

    if(user==false){
        return(
                <Auth.Navigator>
                    <Auth.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Auth.Screen name="OTP" component={OtpScreen} options={{ headerShown: false }} />
                    <Auth.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
                </Auth.Navigator>
            )
    }else{
        return (<DrawerNavigator />)
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default StackNavigator;