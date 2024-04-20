import React from 'react'
import { StyleSheet, View } from 'react-native'

const fimBom = () => {
    return (
        <View style= {styles.body}>
            <View style={styles.text}>
            <h1>Parabéns, Você zerou o quiz</h1>
            <h3> com a pontuação: </h3>
            </View>
<br/>
        </View>
    )
}




export default fimBom

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        color: 'white',
        backgroundColor: 'black'
     },
     tinyLogo: {
        width: 200,
        height: 200
    },
        text: {
            margin: '5%'
        }
})
