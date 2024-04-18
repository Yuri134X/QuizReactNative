import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const fimRuim = () => {
    return (
        <View style= {styles.body}>
            <h1>Infelizmente você falhou com o quiz, volte para o fundamental pq vc é uma vergonha para a humanidade</h1>
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
        alignItems:'center'
     },
     tinyLogo: {
        width: 300,
        height: 200,}
})
