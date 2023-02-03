import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import City from './app/City';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Weather from './app/Weather';

type RootStackParams = {
  City: any;
  Weather: any;
}
const Stack = createNativeStackNavigator<RootStackParams>();
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name="City"
          component={City}
        />
        <Stack.Screen
          name="Weather"
          component={Weather}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
