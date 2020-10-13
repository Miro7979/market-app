import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../component/AppButton';
import Screen from '../component/Screen';
import AppFormField from '../component/AppFormField';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/bazarLogo.png')} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <React.Fragment>
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