import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Yup from 'yup';

import {
  Screen,
  SubmitButton,
  FormField,
  Form,
  Picker,
  FormRadio,
  DatePicker,
  ApplicationDetails,
  Button,
} from '../components';
import { assets, COLORS, FONTS } from '../constants';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  policyNumber: Yup.string().required().min(4).label('Policy Number'),
  fullName: Yup.string().required().min(4).label('Full Name'),
});

const initialValues = {
  policyNumber: '',
  fullName: '',
  gender: '',
  dateOfBirth: new Date(),
  nationality: '',
};

const nats = [
  { label: 'American', value: 1 },
  { label: 'Lebanese', value: 2 },
  { label: 'Syrian', value: 3 },
  { label: 'French', value: 4 },
];

const ApplicationScreen = ({ navigation }) => {
  const [citizenShip, setCitizenShip] = useState();
  const [dob, setDob] = useState();
  const [showAppDetails, setShowAppDetails] = useState(false);

  const handleSub = (values) => {
    console.log('Submitted', values);
    navigation.navigate(routes.STRIPE_PAY, { data: values });
    // setShowAppDetails(true);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image source={assets.logo} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>Application Form</Text>
      </View>

      <Form
        initialValues={initialValues}
        onSubmit={(values) => handleSub(values)}
        validationSchema={validationSchema}
      >
        <FormField
          icon="barcode"
          name="policyNumber"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Policy Number"
        />

        <FormField
          icon="account"
          name="fullName"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Full name"
        />

        <DatePicker
          icon="calendar-month-outline"
          placeholderText="Date of Birth"
          name="dateOfBirth"
          selectedItem={dob}
          onSelectItem={(item) => setDob(item)}
        />

        <FormRadio
          name="gender"
          icon="gender-male-female"
          placeHolder="Gender"
        />

        <Picker
          items={nats}
          icon="apps"
          name="nationality"
          placeholder="Nationality"
          selectedItem={citizenShip}
          onSelectItem={(item) => setCitizenShip(item)}
        />

        <SubmitButton title="Submit" />
        <Button
          title="Back"
          color={COLORS.secondary}
          onPress={() => navigation.goBack()}
        />
        <ApplicationDetails
          visible={showAppDetails}
          setVisible={setShowAppDetails}
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
