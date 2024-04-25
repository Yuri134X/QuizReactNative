import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Pergunta = () => {
  const navigation = useNavigation();

  const [pontos, setPontos] = useState(0);
  const [respostaCorreta, setRespostaCorreta] = useState(false);
  const [botoesAtivados, setBotoesAtivados] = useState(true);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const handleResposta = (resposta) => {
    if (resposta === 'B') {
      setPontos(pontos + 2);
      setRespostaCorreta(true);
    } else {
      
      setRespostaCorreta(false);
      setMostrarMensagem(true);
    }
    setBotoesAtivados(false);
  };

  const irParaProximaPergunta = () => {
    navigation.navigate('pergunta2', { pontuação: pontos });
  };

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Text style={styles.texto}>Pontuação: {pontos}</Text>
      <Text style={styles.texto}>Quem foi o primeiro presidente do Brasil?</Text>
      <Image
        style={styles.tinyLogo}
        source={require('../imagens/faixa presidente.jpg')}
      />
      <ScrollView contentContainerStyle={styles.buttons}>
        <br />
        <Button
          title='Luis Inacio Lula da Silva'
          onPress={() => handleResposta('A')}
          disabled={!botoesAtivados}
        />
        <br />
        <Button
          title='Deodoro da Fonseca'
          onPress={() => handleResposta('B')}
          disabled={!botoesAtivados}
        />
        <br />
        <Button
          title='Juscelino Kubitschek'
          onPress={() => handleResposta('C')}
          disabled={!botoesAtivados}
        />
        <br />
        <Button
          title='Tancredo Neves'
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
};

export default Pergunta;

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems:'center',
    color: 'white',
    backgroundColor: 'black'
  },
  buttons: {
    marginTop: 10,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  texto: {
    textAlign: 'center',
    fontFamily: 'Comic Sans MS',
    fontSize: 20,
    color: 'white',
  },
});
