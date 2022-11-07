import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import TextInput from '../TextInput';
import { StyleSheet, Text } from 'react-native';

const FormField = ({ name, label, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <Text style={styles.styledLabel}>{label}</Text>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  styledLabel: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default FormField;
