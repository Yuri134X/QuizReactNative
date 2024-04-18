
import {StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import homeScreen from './screens/homeScreen';
import História from './screens/Historia';
import Quiz2 from './screens/Quiz2';
import Quiz3 from './screens/Quiz3';
import fimBom from './screens/fimBom';
import fimRuim from './screens/fimRuim';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen name='Home' component={homeScreen} />

          <Stack.Screen name='Historia' component={História} />

          <Stack.Screen name='Quiz2' component={Quiz2} />

          <Stack.Screen name='Quiz3' component={Quiz3} />

          <Stack.Screen name= 'fimBom' component={fimBom} />

          <Stack.Screen name= 'fimRuim' component={fimRuim} />

          
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
