import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../component/AppButton';
import AppTextInput from '../component/AppTextInput';
import Screen from '../component/Screen';

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/bazarLogo.png')} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <React.Fragment>
            <AppTextInput
              autoCapitlize='none'
              autoCorrect={false}
              icon='email'
              onChangeText={handleChange('email')}
              keybordType='email-address'
              placeholder='Email'
              textContentType='emailAddress'
            />
            <AppTextInput
              autoCapitlize='none'
              autoCorrect={false}
              icon='lock'
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry={true}
              textContendType='password'
            />
            <AppButton
              title='Login' onPress={handleSubmit}
            />
          </React.Fragment>
        )}
      </Formik>

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