import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import BotaoLogin from '../components/BotaoLogin';

export default function LoginScreen({ aoLogar }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {
    if (usuario.trim() && senha.trim()) {
      aoLogar(usuario);
    } else {
      Alert.alert('Erro', 'Preencha todos os campos!');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Rota Cultural</Text>

        {/* Campo de Usuário */}
        <Text style={styles.texto}>Usuário ou E-mail</Text>
        <TextInput
          style={styles.input}
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
          placeholder="Digite seu usuário ou e-mail"
        />

        {/* Campo de Senha */}
        <Text style={styles.texto}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Digite sua senha"
        />

        {/* Botão de login */}
        <BotaoLogin aoPressionar={fazerLogin} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  texto: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
});
