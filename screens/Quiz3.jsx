import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Quiz2 = () => {
    return (
        <View style= {styles.body}>
            <Text >Quem descobriu o Brasil?</Text>
</View>)}

export default Quiz2

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

