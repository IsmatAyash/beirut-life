import { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import moment from 'moment';

import {
  Screen,
  SubmitButton,
  FormField,
  Form,
  Picker,
  DatePicker,
  ApplicationDetails,
  Button,
} from '../components';
import { assets, COLORS, FONTS } from '../constants';
import routes from '../navigation/routes';
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_PUBLISHABLE_KEY, API_URL } from '../Config';
import { PolicyContext } from '../context/policyContext';

const validationSchema = Yup.object().shape({
  insuredName: Yup.string().required().min(4).label('Insured Name'),
  telephone: Yup.string().required().label('Telephone'),
  duration: Yup.number().required().min(1).max(90).label('Duration'),
  beneficiary: Yup.string().required().min(4).label('Beneficiary'),
  email: Yup.string().email().label('Email'),
});

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
  const { policy, updatePolicy } = useContext(PolicyContext);

  const item = route.params;

  const getPolicyNumber = async () => {
    const response = await fetch(`${API_URL}/setting/getSeq`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { intValue } = await response.json();
    const seq = String(intValue).padStart(5, '0');
    const yr = new Date().getFullYear() - 2000;
    return `001/${seq}/${item.policyCode}/${String(yr)}`;
  };

  const mapUpdateValues = async (values) => {
    values.intro = item.intro;
    values.policyNumber = await getPolicyNumber();
    values.title = item.title;
    values.policyCode = item.policyCode;
    values.sumInsured = item.sumInsured;
    values.premium = item.premium;
    values.issuanceDate = new Date();
    values.expiryDate = new Date(
      moment(values.effectiveDate, 'DD-MM-YYYY').add(values.duration, 'd')
    );
    values.exclusion = item.exclusion || '';
    values.policyRider = item.policyRider || '';
    updatePolicy(values);
  };

  const handleSub = async (values) => {
    try {
      await mapUpdateValues(values);
      // navigation.navigate(routes.STRIPE_PAY);
      navigation.navigate(routes.BOB_PAY);
    } catch (err) {
      console.error(err);
      Alert.alert('Something went wrong, try again later!');
    }
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <StripeProvider
          publishableKey={STRIPE_PUBLISHABLE_KEY}
          merchantIdentifier="Beirut Life"
        >
          <ScrollView onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Image
                source={assets.logo}
                resizeMode="contain"
                style={styles.logo}
              />
              <Text style={styles.title}>{item.name}</Text>
            </View>

            <Form
              initialValues={policy}
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

              <FormField
                icon="email"
                name="email"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email"
              />

              <DatePicker
                icon="calendar-month-outline"
                placeholderText="Date of Birth"
                name="dateOfBirth"
                selectedItem={dob}
                onSelectItem={(item) => setDob(item)}
              />

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
              <View style={styles.btnGroup}>
                <SubmitButton title="Submit" />
                <Button
                  title="Back"
                  color={COLORS.slate}
                  onPress={() => navigation.goBack()}
                />
              </View>
              <ApplicationDetails
                visible={showAppDetails}
                setVisible={setShowAppDetails}
              />
            </Form>
          </ScrollView>
        </StripeProvider>
      </KeyboardAvoidingView>
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
    alignSelf: 'center'
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default ApplicationScreen;
