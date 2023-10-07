import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import TodayScreen from './app/screens/TodayScreen';
import AddAOL from './app/components/AddAOL';
import AddSnapshot from './app/components/AddSnapshot';
import Register from './app/components/Register';
import AOLListScreen from './app/screens/AOLListScreen';
import AddAOLScreen from './app/screens/AddAOLScreen';
import AddSnapshotScreen from './app/screens/AddSnapshotScreen';
import colours from './app/config/colours';
import AuthNavigator from './app/navigation/AuthNavigator';
import AOLNavigator from './app/navigation/AOLNavigator';
import SnapshotNavigator from './app/navigation/SnapshotNavigator';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTheme from './app/navigation/NavigationTheme';

export default function App() {

  return (
        <NavigationContainer theme={NavigationTheme}>
          <AuthNavigator />
        </NavigationContainer>
  );
}

