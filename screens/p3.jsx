import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Quiz2 = () => {
    return (
        <View style= {styles.body}>
            <Text >Quem descobriu o Brasil?</Text>
<br/>

        <View>
            <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://conteudo.imguol.com.br/c/entretenimento/dc/2018/04/20/envie-um-meme-engracado-para-o-bol-11-97335-6855-1524197722204_v2_615x300.jpg',
            }}/>
        </View>

<br/>

            <View style= {styles.buttons}>
            <button>Pedro alvares cabral</button>
            <button>Os indio</button>
            <button> viajante do tempo</button>
            <button> Don pedro 1°</button>
            </View>

        </View>
    )
}

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

