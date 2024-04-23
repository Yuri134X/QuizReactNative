
import {StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import homeScreen from './screens/homeScreen';
import fimBom from './screens/fimBom';
import fimRuim from './screens/fimRuim';
import pergunta2 from './screens/pergunta2';
import pergunta3 from './screens/pergunta3';
import pergunta4 from './screens/pergunta4';
import pergunta5 from './screens/pergunta5';
import Pergunta from './screens/pergunta';
import Quiz from './calcularPontos/pontos';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen name='Home' component={homeScreen} />

          <Stack.Screen name='Teste' component={Quiz} />

          <Stack.Screen name='pergunta' component={Pergunta} />

          <Stack.Screen name='pergunta2' component={pergunta2} />

          <Stack.Screen name='pergunta3' component={pergunta3} />

          <Stack.Screen name='pergunta4' component={pergunta4} />

          <Stack.Screen name='pergunta5' component={pergunta5} />

          <Stack.Screen name= 'fimBom' component={fimBom} />

          <Stack.Screen name= 'fimRuim' component={fimRuim} />

          
        </Stack.Navigator>

    </NavigationContainer>

  );
}
