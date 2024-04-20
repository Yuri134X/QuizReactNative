import { StyleSheet, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const pergunta4 = ({navigation}) => {
  navigation = useNavigation()
  return (
    
    <View style={styles.body}>
      <h1 style= {styles.texto}>Com que idade Dom Pedro II tornou-se imperador do Brasil?</h1>
<br/>

      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://s2.glbimg.com/6McDRfEMsO5NCUWzGzVMvAawvE0=/620x620/e.glbimg.com/og/ed/f/original/2020/09/03/dom-pedro-ii.jpg'
          }}
        />
      </View>

<br/>

      <View style={styles.buttons}>
        <Button title='5 anos'
          onPress={() => {navigation.navigate("fimRuim")}} />
<br/>       
        <Button title='18 anos'
        onPress={() => {navigation.navigate("fimRuim")}} />
<br/>
        <Button title='14 anos'
        onPress={() => {navigation.navigate("pergunta5")}} />
<br/>
        <Button title='15 anos e 3 meses'
        onPress={() => {navigation.navigate("fimRuim")}} />

      </View>

    </View>
  );
}

export default pergunta4

const styles = StyleSheet.create({
  body: {
    flex: 1, 
    justifyContent: 'center',
    alignItems:'center',
    color: 'white',
    backgroundColor: 'black'
  },
  buttons:{
    display: 'flex', 
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  texto: {
    textAlign: 'center',
    fontFamily: 'Comic Sans MS',
    fontSize: "150%"}
})