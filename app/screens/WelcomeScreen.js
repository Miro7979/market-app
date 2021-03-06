import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import routes from '../navigation/routes';

import AppButton from '../component/Button';


function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require('../assets/ws-background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/bazarLogo.png')} />
        <Text style={styles.tagLine}>Sell the things you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate(routes.LOGIN)} />
        <AppButton title='Register' color='secondary' onPress={() => navigation.navigate('Register')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagLine: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20,
  },

})

export default WelcomeScreen;