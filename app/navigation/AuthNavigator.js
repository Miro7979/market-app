import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Register' component={AccountScreen} />
  </Stack.Navigator>
);


export default AuthNavigator;