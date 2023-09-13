import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import RegisterScreen from './app/screens/RegisterScreen';
import AddAOL from './app/components/AddAOL';
import AddSnapshot from './app/components/AddSnapshot';
import Register from './app/components/Register';

export default function App() {

  return (
      <RegisterScreen />
  );
}

