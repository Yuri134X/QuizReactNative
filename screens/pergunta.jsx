import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const pergunta = ({navigation}) => {
    navigation = useNavigation()
    return (
      <View style= {styles.body}>
      <h1 style= {styles.texto}>Quem foi o primeiro presidente do Brasil?</h1>
<br/>

  <View>
      <Image
      style={styles.tinyLogo}
      source={{
      uri: 'https://rankingpesquisa.com.br/wp-content/uploads/2021/07/223860897_4116094155147465_3539709508465205851_n.jpg',
      }}/>
  </View>

<br/>

        <View style= {styles.buttons}>

        <Button 
        onPress={() => {navigation.navigate("fimRuim")}}
            title="Luis Inacio"
             /> 
<br />
        <Button 
        onPress={() => {navigation.navigate("pergunta2")}}
        title="M. Deodoro da fonseca"
            />
<br />
        <Button 
        onPress={() => {navigation.navigate("fimRuim")}}
        title="Bolsonaro"
            /> 
<br />
         <Button 
             onPress={() => {navigation.navigate("fimRuim")}}
             title="fernando collor"
            /> 
<br />

        
            </View>

        </View>
    )
}

export default pergunta

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
        margin: '5%'
     },
     tinyLogo: {
        width: 200,
        height: 200},

        texto: {
          textAlign: 'center',
          fontFamily: 'Comic Sans MS',
          fontSize: "150%"}
})

