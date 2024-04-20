import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const fimRuim = () => {
    return (
        <View style= {styles.body}>
            <h1 style={styles.ask}>Infelizmente você falhou com o quiz, volte para o fundamental pq vc é uma vergonha para a humanidade</h1>
            <h3>Seu LIXO de pontuação foi: 0</h3>
<br/>
        <View>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://www.shutterstock.com/shutterstock/photos/408457885/display_1500/stock-vector-angry-emoticon-pointing-out-or-away-408457885.jpg'}}/>
            </View>
        </View>
    )
}




export default fimRuim

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        justifyContent: 'center',
        alignItems:'center',
        color: 'white',
        backgroundColor: 'black'
     },
     tinyLogo: {
        width: 300,
        height: 200,},

        ask: {
            textAlign: 'center',
            margin: '5%'
        }
})
