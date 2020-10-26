
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import ListItem from './app/component/ListItem';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/component/Screen';
import ImageInput from './app/component/ImageInput';
import { Button, Image } from 'react-native';

export default function App() {
  const [imageUri, setImageUri] = useState();



  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={uri => setImageUri(uri)} />
    </Screen>

  )
}


