import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import DrawerNavigator from './DrawerNavigator';

export default function App() {
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
