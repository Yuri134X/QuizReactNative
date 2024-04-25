import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Pergunta = () => {
  const navigation = useNavigation();

  const [pontos, setPontos] = useState();
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
    navigation.navigate('pergunta2', { pontos });
  };

  return (
    <View style={styles.body}>
      <Text style={styles.texto}>Pontuação: {pontos}</Text>
      <Text style={styles.texto}>Quem foi o primeiro presidente do Brasil?</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://rankingpesquisa.com.br/wp-content/uploads/2021/07/223860897_4116094155147465_3539709508465205851_n.jpg',
        }}
      />
      <View style={styles.buttons}>
        <Button
          title='Luis Inacio Lula da Silva'
          onPress={() => handleResposta('A')}
          disabled={!botoesAtivados}
        />
        <Button
          title='Deodoro da Fonseca'
          onPress={() => handleResposta('B')}
          disabled={!botoesAtivados}
        />
        <Button
          title='Juscelino Kubitschek'
          onPress={() => handleResposta('C')}
          disabled={!botoesAtivados}
        />
        <Button
          title='Tancredo Neves'
          onPress={() => handleResposta('D')}
          disabled={!botoesAtivados}
        />
      </View>
      {respostaCorreta && <Text style={styles.texto}>Resposta correta! </Text>}
      {mostrarMensagem && <Text style={styles.texto}>Resposta incorreta! </Text>}
      <Button
        title="Próxima pergunta"
        onPress={irParaProximaPergunta}
        disabled={!respostaCorreta && !mostrarMensagem}
      />
    </View>
  );
};

export default Pergunta;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
