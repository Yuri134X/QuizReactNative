import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

const Quiz2 = () => {
    return (
        <View style= {styles.body}>
            <Text >Quem Matou hitler?</Text>
<br/>

        <View>
            <Image
            style={styles.tinyLogo}
            source={{
            uri: 'data:image/jpeg;base64,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',
            }}/>
        </View>

<br/>

            <View style= {styles.buttons}>
            <Button>Vasco</Button>
            <Button>Suicidio com 6 tiros nas costas</Button>
            <Button> viajante do tempo</Button>
            <Button> literalmente ele</Button>
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

