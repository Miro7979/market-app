
import React from 'react';

import Screen from './app/component/Screen';
import ImageInputList from './app/component/ImageInputList';
import ImageInput from './app/component/ImageInput';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {


  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>

  )
}


