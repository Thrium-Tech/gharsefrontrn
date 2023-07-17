import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import DrawerNavigator from './DrawerNavigator';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    'WorkSans-Light': require('./assets/fonts/WorkSans-Light.ttf')
  });

  if (!fontsLoaded) {
    return (<></>);
  }


  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      {/* <NavigationContainer>
        <StackNavigator />
      </NavigationContainer> */}
    </>
  );
}
