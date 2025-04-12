import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ nomeUsuario }) {
  return (
    <View style={styles.container}>
      <Text style={styles.bemVindo}>Bem-vindo, {nomeUsuario}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
  },
  bemVindo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
