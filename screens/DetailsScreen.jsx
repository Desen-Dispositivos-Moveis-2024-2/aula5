// Importações necessárias
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header'; // Reutilização do componente de cabeçalho
import CustomButton from '../components/CustomButton'; // Componente de botão personalizado

// Tela de detalhes
export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho personalizado com botão de voltar */}
      <Header title="Detalhes" goBack={() => navigation.goBack()} />

      {/* Corpo da tela */}
      <View style={styles.content}>
        <Text style={styles.detailText}>Aqui estão os detalhes...</Text>
        {/* Uso do componente de botão personalizado */}
        <CustomButton
          text="Mostrar Alerta"
          onPress={() => alert('Alerta de detalhes!')}
        />
      </View>
    </View>
  );
}

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fundo branco para contraste
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333333',
  },
});
