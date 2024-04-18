import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Quiz3 = ({navigation}) => {
  navigation = useNavigation()

  return (
    <View style={styles.body}>
      <h1 >Quem descobriu o Brasil?</h1>
<br/>

      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://conteudo.imguol.com.br/c/entretenimento/dc/2018/04/20/envie-um-meme-engracado-para-o-bol-11-97335-6855-1524197722204_v2_615x300.jpg'
          }}
        />
      </View>

<br/>

      <View style={styles.buttons}>
        <Button title='Pedro Álvares Cabral'
          onPress={() => {navigation.navigate("fimBom")}} />
<br/>       
        <Button title='Os indios'
        onPress={() => {navigation.navigate("fimRuim")}} />
<br/>
        <Button title='viajante do tempo'
        onPress={() => {navigation.navigate("fimRuim")}} />
<br/>
        <Button title=' Don pedro 1°'
        onPress={() => {navigation.navigate("fimRuim")}} />

      </View>

    </View>
  );
}

export default Quiz3;

const styles = StyleSheet.create({
  body: {
    flex: 1, 
    justifyContent: 'center',
    alignItems:'center',
  },
  buttons:{
    display: 'flex',
  },
  tinyLogo: {
    width: 200,
    height: 200,}
})
