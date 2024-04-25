import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const pergunta3 = ({navigation, route}) => {
  const { pontuação } = route.params;
  navigation = useNavigation()

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
        navigation.navigate('pergunta4', { pontuação: pontos });
    };

  return (
    <ScrollView contentContainerStyle={styles.body}>
            <Text style={styles.texto}>Pontuação: {pontuação} </Text>
            <Text style={styles.texto}>Quem descobriu o Brasil em 1500?</Text>
            <Image
                style={styles.tinyLogo}
                source={require('../imagens/descobrimento brasil.jpg')}
            />

            <ScrollView contentContainerStyle={styles.buttons}>
                <br />
                <Button
                    title='Pedro Álvares Cabral'
                    onPress={() => handleResposta('A')}
                    disabled={!botoesAtivados}
                />
                <br />
                <Button
                    title='Cristóvão Colombo'
                    onPress={() => handleResposta('B')}
                    disabled={!botoesAtivados}
                />
                <br />
                <Button
                    title='Vasco da Gama'
                    onPress={() => handleResposta('C')}
                    disabled={!botoesAtivados}
                />
                <br />

                <Button
                    title='Bartolomeu Dias'
                    onPress={() => handleResposta('D')}
                    disabled={!botoesAtivados}
                />
                <br />
            </ScrollView>

            {respostaCorreta && <Text style={styles.texto}>Resposta correta! </Text>}
            {mostrarMensagem && <Text style={styles.texto}>Resposta incorreta! </Text>}
            
            <Button
                title="Próxima pergunta"
                onPress={irParaProximaPergunta}
                disabled={!respostaCorreta && !mostrarMensagem}
            />
        </ScrollView>
  );
}

export default pergunta3;

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
})
