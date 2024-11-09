// Importações necessárias
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícones para melhor UX/UI

// Componente de cabeçalho personalizado
export default function Header({ title, goBack }) {
  return (
    // Contêiner do cabeçalho
    <View style={styles.header}>
      {/* Se a função goBack for passada, exibe o botão de voltar */}
      {goBack && (
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
      )}
      {/* Título do cabeçalho */}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

// Estilos para o cabeçalho
const styles = StyleSheet.create({
  header: {
    height: 60 + StatusBar.currentHeight, // Altura do cabeçalho mais a altura da barra de status
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
