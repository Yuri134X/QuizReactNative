import React from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'

const Quiz3 = () => {
    var pontos = 0

    
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

            <Button onPress={pontos++}>Pedro alvares cabral</Button>
            <Button>Os indio</Button>
            <Button> viajante do tempo</Button>
            <Button> Don pedro 1°</Button>
            <Text>{pontos}</Text>

            </View>

        </View>
    )
}

export default Quiz3

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

