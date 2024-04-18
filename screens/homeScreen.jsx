import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const homeScreen = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View style= {styles.body}>
            <h1> Bem vindo ao QUIZ</h1>
            <h2>Selecione a categoria abaixo </h2>
<br />
            <View> <Button
                title='História'
                onPress={() => {navigation.navigate("Historia")}}
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
    margin: '10PX'}, 
    
})


