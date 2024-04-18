import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const fimBom = () => {
    return (
        <View style= {styles.body}>
            <h1>Parabéns, você manja de Historia</h1>
<br/>
        <View>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUAdg1odjbD-Q5vZCRaEsx0VbRpGBt7a35MeRyrgYlQ&s'}}/>
            </View>
        </View>
    )
}




export default fimBom

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        justifyContent: 'center',
        alignItems:'center'
     },
     tinyLogo: {
        width: 200,
        height: 200,}
})
