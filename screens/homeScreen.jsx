import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const homeScreen = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View style= {styles.body}>
            <Text> bem vindo ao quiz</Text>
            <Text>Selecione a categoria abaixo </Text>
            <View> <Button
                title='História'
                onPress={() => {navigation.navigate("Historia")}}
                /></View>

                <View> <Button
                title='Pergunta 2'
                onPress={() => {navigation.navigate("Quiz2")}}
                /></View>

                <View> <Button
                title='Pergunta 3'
                onPress={() => {navigation.navigate("Quiz3")}}
                /></View>
                 
            
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


