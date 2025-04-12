import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('login');
  const [nomeUsuario, setNomeUsuario] = useState('');

  const aoLogar = (usuario) => {
    setNomeUsuario(usuario);
    setTelaAtual('home');
  };

  return telaAtual === 'login' ? (
    <LoginScreen aoLogar={aoLogar} />
  ) : (
    <HomeScreen nomeUsuario={nomeUsuario} />
  );
}