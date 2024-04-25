import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const homeScreen = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View style= {styles.body}>
            <View style= {styles.texto}>
            <h1> Bem vindo ao QUIZ</h1>
  <br />
            <h2>O quiz é o nosso jogo de perguntas e respostas. Aqui você pode testar os seus conhecimentos de forma interativa e divertida!</h2>
            <h2>Como funciona: cada pergunta vale 2 pontos. A cada jogo, seu objetivo é tentar acertar as 5 questões sorteadas, clicando nas alternativas que você considera corretas. Boa sorte!</h2>
            </View>
<br />
            <View> <Button
                title='Começar'
                onPress={() => {navigation.navigate("pergunta")}}
                /></View>

<br />
        
            
        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    body: {
        flex: 10, 
        justifyContent: 'center',
        alignItems:'center',
        color: 'white',
        backgroundColor: 'black'}, 
    texto: {
        textAlign: 'center',
        fontFamily: 'Comic Sans MS',
        fontSize: "70%",
        margin: "10%"
    }
    
})


