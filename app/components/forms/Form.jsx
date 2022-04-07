import { StyleSheet, Text, View } from 'react-native';

import { Formik } from 'formik';

const Form = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

const styles = StyleSheet.create({});

export default Form;
