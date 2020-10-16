import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../component/Screen';
import { AppForm, AppFormField, SubmitButton } from '../component/forms';



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/bazarLogo.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitlize='none'
          autoCorrect={false}
          icon='email'
          keybordType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitlize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry={true}
          textContendType='password'
        />
        <SubmitButton title='Login' />
      </AppForm>

    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
});

export default LoginScreen;