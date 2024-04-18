import React from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const História = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View style= {styles.body}>
            <h1 >Quem foi o primeiro presidente do Brasil?</h1>
<br/>

        <View>
            <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://rankingpesquisa.com.br/wp-content/uploads/2021/07/223860897_4116094155147465_3539709508465205851_n.jpg',
            }}/>
        </View>

<br/>

            <View style= {styles.buttons}>
            <Button 
            onPress={() => {navigation.navigate("fimRuim")}}
            title="Cristiano ronaldo"
            /> 
            <br />
            <Button 
            onPress={() => {navigation.navigate("Quiz2")}}
            title="M. Deodoro da fonseca"
            />
            <br />
            <Button 
            onPress={() => {navigation.navigate("fimRuim")}}
            title="Bolsonaro"
            /> 
            <br />
            <Button 
            onPress={() => {navigation.navigate("fimRuim")}}
            title="fernando collor"
            /> 
            <br />
            
            </View>

        </View>
    )
}

export default História

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
        height: 200,
    borderColor: 'black'}
})

