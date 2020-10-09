
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, TextInput } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import ListItem from './app/component/ListItem';
import AppText from './app/component/AppText';
import AppButton from './app/component/AppButton';
import Card from './app/component/Card';
import ListDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/component/Screen';
import Icon from './app/component/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/component/AppTextInput';
import AppPicker from './app/component/AppPicker';

const categories = [
  {
    label: 'cars',
    value: 1
  },
  {
    label: 'house',
    value: 2
  },
  {
    label: 'jobs',
    value: 3
  }
];
export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} icon='apps' placeholder='Category' />
      <AppTextInput icon='email' placeholder='email' />
    </Screen>
  )
}


