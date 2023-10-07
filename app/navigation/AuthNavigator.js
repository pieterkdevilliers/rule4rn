import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AOLNavigator from './AOLNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Login"> 
    <Stack.Screen name="Login" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Areas Of Life" component={AOLNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default AuthNavigator;
