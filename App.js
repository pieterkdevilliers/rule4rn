import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import AddAOL from './app/components/AddAOL';
import AddSnapshot from './app/components/AddSnapshot';
import Register from './app/components/Register';

export default function App() {

  return (
      <WelcomeScreen />
  );
}

