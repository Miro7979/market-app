import React from 'react';
import { useFormikContext } from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <React.Fragment>
      <TextInput
        onChangeText={text => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};



export default AppFormField;