import { StyleSheet, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const pergunta5 = ({navigation}) => {
  navigation = useNavigation()
  return (
    
    <View style={styles.body}>
      <h1 style= {styles.texto}>Quem liderou a 2° guerra mundial?</h1>
<br/>

      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2023/06/08-Cidade-brasileira-foi-a-que-mais-enviou-soldados-para-a-Segunda-Guerra-FOTO-GENILSON-PACETTI.png'
          }}
        />
      </View>

<br/>

      <View style={styles.buttons}>
        <Button title='Adolf Hitler e Benito Mussolini'
          onPress={() => {navigation.navigate("fimBom")}} />
<br/>       
        <Button title='Adolf hitler'
        onPress={() => {navigation.navigate("fimRuim")}} />
<br/>
        <Button title='Josef Stalin'
        onPress={() => {navigation.navigate("fimRuim")}} />
<br/>
        <Button title='Joseph Goebbels'
        onPress={() => {navigation.navigate("fimRuim")}} />

      </View>

    </View>
  );
}

export default pergunta5

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