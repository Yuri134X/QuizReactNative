
import {StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import homeScreen from './screens/homeScreen';
import ModelScreen from './screens/ModelScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen name='Model' component={ModelScreen}  />

          <Stack.Screen name='Home' component={homeScreen}  />
          
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
    textAlign: 'center'}
          
});
