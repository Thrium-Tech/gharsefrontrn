import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { AuthProvider } from "./AuthProvider";
import DrawerNavigator from './DrawerNavigator';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'WorkSans-Light': require('./assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Regular': require('./assets/fonts/WorkSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return (<></>);
  }


  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      {/* <NavigationContainer>
        <StackNavigator />
      </NavigationContainer> */}
    {/* <StackNavigator /> */}
    </AuthProvider>
  );
}
