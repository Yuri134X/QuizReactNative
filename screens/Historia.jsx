import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const História = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View style= {styles.body}>
            <Text >Quem foi o primeiro presidente do Brasil?</Text>
            
            <br/>
            <View>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://rankingpesquisa.com.br/wp-content/uploads/2021/07/223860897_4116094155147465_3539709508465205851_n.jpg',
        }}/>
        </View>

        <br />

            <View style= {styles.buttons}>
            <button> Cristiano ronaldo</button>

         <button
                title='quiz2'
                onPress={() => {navigation.navigate("quiz2")}}
                >s</button>

            <button> Bolsonaro</button>
            <button> fernando collor</button>
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
        height: 200,}
})

