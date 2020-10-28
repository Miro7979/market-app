
import React from 'react';

import Screen from './app/component/Screen';
import ImageInputList from './app/component/ImageInputList';
import ImageInput from './app/component/ImageInput';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {


  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>

  )
}


