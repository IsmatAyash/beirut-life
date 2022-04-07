import { StyleSheet, Text, View } from 'react-native';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import TextInput from '../TextInput';

const FormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default FormField;
