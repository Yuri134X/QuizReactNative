import React from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'

const História = () => {
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

<br/>

            <View style= {styles.buttons}>
            <Button 
            onPress={false}
            title="Cristiano ronaldo"
            /> 
            <Button 
            onPress={true}
            title="M. Deodoro da fonseca"
            />
            <Button 
            onPress={false}
            title="Bolsonaro"
            /> 
            <Button 
            onPress={false}
            title="fernando collor"
            /> 
            
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

