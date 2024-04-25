import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const pergunta2 = ({ navigation, route}) => {
    navigation = useNavigation();
    
    
    const { pontuação } = route.params;
    

    const [pontos, setPontos] = useState(pontuação);
    const [respostaCorreta, setRespostaCorreta] = useState(false);
    const [botoesAtivados, setBotoesAtivados] = useState(true);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const handleResposta = (resposta) => {
        if (resposta === 'A') {
            setPontos(pontuação + 2);
            setRespostaCorreta(true);
        } else {
            
            setRespostaCorreta(false);
            setMostrarMensagem(true);
        }
        setBotoesAtivados(false);
    };

    const irParaProximaPergunta = () => {
        navigation.navigate('pergunta3', {pontuação: pontos });
    };

    return (
        <ScrollView contentContainerStyle={styles.body}>
            <Text style={styles.texto}>Pontuação: {pontuação} </Text>
            <Text style={styles.texto}>Quem Matou Hitler?</Text>
            <Image
                style={styles.tinyLogo}
                source={require('../imagens/Adolf Hitler.jpg')}
            />

            <ScrollView contentContainerStyle={styles.buttons}>
                <br />
                <Button
                    title='Hitler se matou'
                    onPress={() => handleResposta('A')}
                    disabled={!botoesAtivados}
                />
                <br />
                <Button
                    title='Adolf Hitler foi morto por soldados alemães rebeldes'
                    onPress={() => handleResposta('B')}
                    disabled={!botoesAtivados}
                />
                <br />
                <Button
                    title='Soldados americanos o mataram'
                    onPress={() => handleResposta('C')}
                    disabled={!botoesAtivados}
                />
                <br />

                <Button
                    title='Alemães rebeldes o mataram'
                    onPress={() => handleResposta('D')}
                    disabled={!botoesAtivados}
                />
                <br />
            </ScrollView>

            {respostaCorreta && <Text style={styles.texto}>Resposta Correta! </Text>}
            {mostrarMensagem && <Text style={styles.texto}>Resposta Incorreta! </Text>}
            
            <Button
                title="Próxima pergunta"
                onPress={irParaProximaPergunta}
                disabled={!respostaCorreta && !mostrarMensagem}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems:'center',
        color: 'white',
        backgroundColor: 'black'
     },
     buttons:{
        display: 'flex',
        marginTop: 10,
     },
     tinyLogo: {
        width: 200,
        height: 200,
     },
     texto: {
        textAlign: 'center',
        fontFamily: 'Comic Sans MS',
        fontSize: 30,
        color: 'white',
     }
});

export default pergunta2;
