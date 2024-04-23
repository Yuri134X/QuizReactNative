import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Quiz = ({navigation}) => {
  
  navigation = useNavigation()

  useEffect(()=> {
    const delay = 5000;

    const timer = setTimeout(() => {
      navigation.navigate('pergunta2');
    }, delay);

    return () => clearTimeout(timer);
  }, [navigation]);
  
  const [pontos, setPontos] = useState(0);
  const [respostaCorreta, setRespostaCorreta] = useState(false);

  const handleResposta = (resposta) => {
    if (resposta === 'B') {
      setPontos(pontos + 2);
      setRespostaCorreta(true);
    } else {
      setRespostaCorreta(false);
    }
  };

  useEffect(() => {
    handleResposta();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Quem foi o primeiro presidente do Brasil?</Text>
      <Button title='A) Getúlio Vargas' onPress={() => handleResposta('A')} />
      <Button title='B) Deodoro da Fonseca' onPress={() => handleResposta('B')} />
      <Button title='C) Juscelino Kubitschek' onPress={() => handleResposta('C')} />
      <Button title='D) Tancredo Neves' onPress={() => handleResposta('D')} />
      {respostaCorreta && <Text style={styles.texto}>Resposta correta! {navigation.navigate('pergunta2')}  </Text>}
      <Text style={styles.texto}>Pontuação: {pontos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Quiz;
