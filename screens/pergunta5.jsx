import { StyleSheet, Text, ScrollView, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react';

const pergunta5 = ({navigation, route}) => {
  const { pontuação } = route.params;
  navigation = useNavigation()

    const [pontos, setPontos] = useState(pontuação);
    const [respostaCorreta, setRespostaCorreta] = useState(false);
    const [botoesAtivados, setBotoesAtivados] = useState(true);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const handleResposta = (resposta) => {
      if (resposta === 'B') {
          setPontos(pontuação + 2);
          setRespostaCorreta(true);
      } else {
        
          setRespostaCorreta(false);
          setMostrarMensagem(true);
      }
      setBotoesAtivados(false);
  };

  const irParaProximaPergunta = () => {
      navigation.navigate('fimBom', { pontuação: pontos });
  };

  return (
    <ScrollView contentContainerStyle={styles.body}>
           <Text style={styles.texto}>Pontuação: {pontuação} </Text>
          <Text style={styles.texto}>Qual evento marcou o início oficial da Segunda Guerra Mundial?</Text>
          <Image
              style={styles.tinyLogo}
              source={require('../imagens/segunda guerra.jpg')}
            />

            <ScrollView contentContainerStyle={styles.buttons}>
                <br />
                <Button
                    title='O ataque japonês a Pearl Harbor'
                    onPress={() => handleResposta('A')}
                    disabled={!botoesAtivados}
                />
                <br />
                <Button
                    title='A invasão da Polônia pela Alemanha nazista'
                    onPress={() => handleResposta('B')}
                    disabled={!botoesAtivados}
                />
                <br />
                <Button
                    title='O tratado de não-agressão entre Alemanha e União Soviética'
                    onPress={() => handleResposta('C')}
                    disabled={!botoesAtivados}
                />
                <br />

                <Button
                    title='O ataque italiano à Etiópia'
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

export default pergunta5

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