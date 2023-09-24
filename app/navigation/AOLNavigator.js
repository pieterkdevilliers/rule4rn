import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import AOLListScreen from '../screens/AOLListScreen';
import AddAOLScreen from '../screens/AddAOLScreen';
import TodayScreen from '../screens/TodayScreen';

const Stack = createStackNavigator();

const AOLNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Areas Of Life" component={AOLListScreen} options={{ headerShown: false}}/>
    <Stack.Screen name="Today" component={TodayScreen} />
    <Stack.Screen name="Add AOL" component={AddAOLScreen} />
  </Stack.Navigator>
);

export default AOLNavigator;