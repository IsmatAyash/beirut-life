import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Yup from 'yup';

import {
  Screen,
  SubmitButton,
  FormField,
  Form,
  Picker,
  Button,
} from '../components';
import { assets, COLORS, FONTS } from '../constants';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(4).label('Full Name'),
  dateOfBirth: Yup.string().required().label('Date of birth'),
  gender: Yup.string().required().label('Gender'),
  nationality: Yup.string().required().label('Nationality'),
});

const initialValues = {
  fullName: '',
  dateOfBirth: '',
  gender: '',
  nationality: '',
};

const nats = [
  { label: 'American', value: 1 },
  { label: 'Lebanese', value: 2 },
  { label: 'Syrian', value: 3 },
  { label: 'French', value: 4 },
];

const ApplicationScreen = ({ navigation }) => {
  const [nash, setNash] = useState();
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={assets.logo} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>Application Form</Text>
      </View>

      <Form
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          icon="account"
          name="fullName"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Full name"
        />
        <FormField
          icon="account"
          name="dateOfBirth"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Date of birth"
        />
        <FormField
          icon="account"
          name="gender"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Gender"
        />
        <Picker
          items={nats}
          icon="apps"
          placeholder="Nationality"
          selectedItem={nash}
          onSelectItem={(item) => setNash(item)}
        />

        <SubmitButton title="Submit" />
        <Button
          title="Back"
          color={COLORS.secondary}
          onPress={() => navigation.goBack()}
        />
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 15,
    paddingHorizontal: 4,
  },
  title: {
    fontFamily: FONTS.bold,
    width: '60%',
    textAlign: 'center',
  },
  logo: {
    width: 90,
    height: 40,
  },
});

export default ApplicationScreen;
