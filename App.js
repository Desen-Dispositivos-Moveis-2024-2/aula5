// Importações essenciais do React e bibliotecas de navegação
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Contêiner principal para a navegação
import { createStackNavigator } from '@react-navigation/stack'; // Cria uma pilha de navegação

// Importação das telas do aplicativo
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen'; // Nova tela de Configurações

// Criação do Stack Navigator
const Stack = createStackNavigator();

// Componente principal do aplicativo
export default function App() {
  return (
    // Contêiner de navegação que gerencia o estado da navegação
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Oculta o cabeçalho padrão para personalização
        }}
      >
        {/* Definição das telas da pilha de navegação */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="Configurações" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
