import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import AOLListScreen from '../screens/AOLListScreen';
import TodayScreen from '../screens/TodayScreen';
import AddSnapshotScreen from '../screens/AddSnapshotScreen';
import AOLNavigator from './AOLNavigator';

const Stack = createStackNavigator();

const SnapshotNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Areas Of Life" component={AOLNavigator} options={{ headerShown: false}}/>
    <Stack.Screen name="Today" component={TodayScreen} />
    <Stack.Screen name="Add Snapshot" component={AddSnapshotScreen} />
  </Stack.Navigator>
);

export default SnapshotNavigator;