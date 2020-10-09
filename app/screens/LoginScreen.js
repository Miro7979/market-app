import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import AppButton from '../component/AppButton';
import AppTextInput from '../component/AppTextInput';

import Screen from '../component/Screen';

function LoginScreen(props) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/bazarLogo.png')} />
      <AppTextInput
        autoCapitlize='none'
        autoCorrect={false}
        icon='email'
        onChangeText={text => setEmail(text)}
        keybordType='email-address'
        placeholder='Email'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitlize='none'
        autoCorrect={false}
        icon='lock'
        onChangeText={text => setPassword(text)}
        placeholder='Password'
        secureTextEntry={true}
        textContendType='password'
      />
      <AppButton
        title='Login' onPress={() => console.log(email, password)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
});

export default LoginScreen;