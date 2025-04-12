import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotaoLogin({ aoPressionar }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={aoPressionar}>
      <Text style={styles.texto}>Entrar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5, // efeito de sombra no Android
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
