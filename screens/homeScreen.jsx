import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {useNavigation } from '@react-navigation/native'

const homeScreen = ({Navigation}) => {
    return (
        <View>
            <Text> bem vindo ao quiz</Text>
            <Text>Selecione a categoria abaixo </Text>

            <Button title='Ir para modelo' >

            </Button>
        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({})


