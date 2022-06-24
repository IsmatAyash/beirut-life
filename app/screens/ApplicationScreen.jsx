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
  insuredName: Yup.string().required().min(4).label('Insured Name'),
  telephone: Yup.string().required().label('Telephone'),
  duration: Yup.number().required().min(1).max(90).label('Duration'),
  beneficiary: Yup.string().required().min(4).label('Beneficiary'),
});

const initialValues = {
  insuredName: '',
  address: '',
  telephone: '',
  dateOfBirth: new Date(),
  nationality: '',
  effectiveDate: new Date(),
  duration: 0,
  beneficiary: '',
  title: '',
  policyNumber: '',
  policyCode: '',
  sumInsured: 0,
  policyRider: '',
  currency: 'USD',
  premium: 0,
  exclusion: '',
  issuanceDate: '',
  expiryDate: '',
};

const nats = [
  { label: 'American', value: 1 },
  { label: 'Lebanese', value: 2 },
  { label: 'Syrian', value: 3 },
  { label: 'French', value: 4 },
];

const ApplicationScreen = ({ route, navigation }) => {
  const [citizenShip, setCitizenShip] = useState();
  const [dob, setDob] = useState();
  const [effDate, setEffDate] = useState();
  const [showAppDetails, setShowAppDetails] = useState(false);

  const item = route.params;

  const handleSub = (values) => {
    values.policyNumber = `001/00001/${item.id}/22`;
    // values.expiryDate = moment(values.effectiveDate, 'DD-MM-YYYY').add(
    //   values.duration,
    //   'days'
    // );
    console.log('Submitted', values);
    navigation.navigate(routes.STRIPE_PAY, { data: values });
    // setShowAppDetails(true);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image source={assets.logo} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>{item.name}</Text>
      </View>

      <Form
        initialValues={initialValues}
        onSubmit={(values) => handleSub(values)}
        validationSchema={validationSchema}
      >
        <FormField
          icon="account"
          name="insuredName"
          autoCorrect={false}
          autoCapitalize="words"
          placeholder="Insured name"
        />

        <FormField
          icon="phone"
          name="telephone"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Telephone"
        />

        <FormField
          icon="home-account"
          name="address"
          autoCorrect={false}
          autoCapitalize="sentences"
          placeholder="Address"
        />

        <DatePicker
          icon="calendar-month-outline"
          placeholderText="Date of Birth"
          name="dateOfBirth"
          selectedItem={dob}
          onSelectItem={(item) => setDob(item)}
        />

        {/* <FormRadio
          name="gender"
          icon="gender-male-female"
          placeHolder="Gender"
        /> */}

        <Picker
          items={nats}
          icon="apps"
          name="nationality"
          placeholder="Nationality"
          selectedItem={citizenShip}
          onSelectItem={(item) => setCitizenShip(item)}
        />

        <DatePicker
          icon="calendar-month-outline"
          placeholderText="Effective Date"
          name="effectiveDate"
          selectedItem={effDate}
          onSelectItem={(item) => setEffDate(item)}
        />

        <FormField
          icon="clock"
          name="duration"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="numeric"
          placeholder="Duration"
        />

        <FormField
          icon="account-arrow-right"
          name="beneficiary"
          autoCorrect={false}
          autoCapitalize="words"
          placeholder="Beneficiary"
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
