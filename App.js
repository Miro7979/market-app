import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/component/AppText';
import AppButton from './app/component/AppButton';
import Card from './app/component/Card';
export default function App() {


  return (
    <Card
      title='A nice car for sale'
      subTitle='100kr'
      image={require('./app/assets/car1.jpg')} />
  );
}


