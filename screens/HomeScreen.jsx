// Importações necessárias
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Header from '../components/Header'; // Componente de cabeçalho personalizado

// Tela inicial do aplicativo
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Define a cor da barra de status para melhorar a UX */}
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
      {/* Cabeçalho personalizado */}
      <Header title="Início" />

      {/* Corpo da tela */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bem-vindo ao Aplicativo!</Text>
        {/* Botão estilizado para navegar para a tela de detalhes */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Detalhes')}
        >
          <Text style={styles.buttonText}>Ir para Detalhes</Text>
        </TouchableOpacity>
        {/* Botão estilizado para navegar para a tela de perfil */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={styles.buttonText}>Ir para Perfil</Text>
        </TouchableOpacity>
        {/* Botão estilizado para navegar para a tela de configurações */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Configurações')}
        >
          <Text style={styles.buttonText}>Ir para Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fundo neutro para melhor UX
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 26,
    marginBottom: 30,
    color: '#333333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%', // Botões com largura adaptativa para melhor UX
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
