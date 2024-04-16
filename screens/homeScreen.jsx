import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const homeScreen = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View>
            <Text> bem vindo ao quiz</Text>
            <Text>Selecione a categoria abaixo </Text>
            <View> <Button
                title='História'
                onPress={() => {navigation.navigate("Historia")}}
                /></View>
            
        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({})


