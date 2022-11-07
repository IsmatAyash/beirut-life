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
  email: Yup.string().email().label('Email'),
  // beneficiary: Yup.string()
  //   .label('Beneficiary')
  //   .when('productCode', {
  //     is: (val) => val === 'ACC-02',
  //     then: Yup.string().required('Benficiary is required'),
  //   }),
});

// const nats = [
//   { label: 'American', value: 1 },
//   { label: 'Lebanese', value: 2 },
//   { label: 'Syrian', value: 3 },
//   { label: 'French', value: 4 },
// ];

const ApplicationScreen = ({ route, navigation }) => {
  // const [citizenShip, setCitizenShip] = useState();
  const [dob, setDob] = useState();
  const [effDate, setEffDate] = useState();
  const [childBdate, setChildBdate] = useState();
  const [showAppDetails, setShowAppDetails] = useState(false);
  const { policy, updatePolicy, coverages } = useContext(PolicyContext);

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
    return `001/${seq}/${item.productCode}/${String(yr)}`;
  };

  const mapUpdateValues = async (values) => {
    values.nationality = 'Lebanese';
    values.intro = item.intro;
    values.policyNumber = await getPolicyNumber();
    values.title = item.title;
    values.productCode = item.productCode;
    values.sumInsured = item.sumInsured;
    values.premium = item.premium;
    values.childName = item.childName;
    values.issuanceDate = new Date();
    values.childBdate = new Date();
    values.expiryDate = new Date(
      moment(values.effectiveDate, 'DD-MM-YYYY').add(values.duration, 'd')
    );
    values.exclusion = item.exclusion || '';
    values.policyRider = item.policyRider || '';
    updatePolicy(values);
  };

  const handleSub = async (values) => {
    // check age for family protector policy and set expiry date
    const cvg = coverages.filter((c) => c.productCode === values.productCode);
    if (values.productCode === 'ACC-01') {
      const age = new Date().getFullYear() - values.dateOfBirth.getFullYear();
      values.expiryDate = new Date(
        moment(new Date().getDate, 'DD-MM-YYYY').add(18 - age, 'd')
      );
      if (age < 18 || age > 55) {
        Alert.alert(
          'Sorry cannot proceed! To apply for this policy your age should be between 18 and 55'
        );
        return;
      }
    } else
      values.expiryDate = new Date(
        moment(new Date().getDate, 'DD-MM-YYYY').add(cvg.duration, 'd')
      );

    // Calculate the sum insured value for the schooling policy
    if (values.productCode === 'ACC-02') {
      values.sumInsured =
        (cvg.minAge -
          (new Date().getFullYear - values.dateOfBirth.getFullYear())) *
        cvg.sumInsuredMultiplier;
    }

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
              <Text style={styles.title}>{item.title}</Text>
            </View>

            <Form
              initialValues={policy}
              onSubmit={(values) => handleSub(values)}
              validationSchema={validationSchema}
            >
              <FormField
                label="Product Code"
                icon="account"
                name="productCode"
                value={item.productCode}
                autoCorrect={false}
                placeholder="Product Code"
              />

              <FormField
                label="Insured Name"
                type="email"
                icon="account"
                name="insuredName"
                autoCorrect={false}
                autoCapitalize="words"
                placeholder="Insured full name"
              />

              <FormField
                label="Mobile"
                icon="phone"
                name="telephone"
                type="numeric"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="961 3 999999"
                keyboardType="numeric"
              />

              <FormField
                label="Address"
                icon="home-account"
                name="address"
                autoCorrect={false}
                autoCapitalize="sentences"
                placeholder="street, building, area, region"
              />

              <FormField
                label="Email"
                icon="email"
                name="email"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="example@bbc.com"
              />
              <DatePicker
                label="Date of Birth"
                icon="calendar-month-outline"
                placeholderText="DD/MM/YYYY"
                name="dateOfBirth"
                selectedItem={dob}
                onSelectItem={(item) => setDob(item)}
              />

              {/* <Picker
                items={nats}
                icon="apps"
                name="nationality"
                placeholder="Nationality"
                selectedItem={citizenShip}
                onSelectItem={(item) => setCitizenShip(item)}
              /> */}
              <DatePicker
                label="Effective Date"
                icon="calendar-month-outline"
                placeholderText="DD/MM/YYYY"
                name="effectiveDate"
                selectedItem={effDate}
                onSelectItem={(item) => setEffDate(item)}
              />

              {item.productCode === 'ACC-02' ? (
                <>
                  <FormField
                    label="Child Name"
                    icon="account-arrow-right"
                    name="childName"
                    autoCorrect={false}
                    autoCapitalize="words"
                    placeholder="Child full name"
                  />
                  <DatePicker
                    label="Child Birth Date"
                    icon="calendar-month-outline"
                    placeholderText="DD/MM/YYYY"
                    name="effectiveDate"
                    selectedItem={childBdate}
                    onSelectItem={(item) => setChildBdate(item)}
                    KeyboardAvoidingView
                  />
                </>
              ) : (
                <FormField
                  label="Beneficiary"
                  icon="account-arrow-right"
                  name="beneficiary"
                  autoCorrect={false}
                  autoCapitalize="words"
                  placeholder="Benficiary's full name"
                  KeyboardAvoidingView
                />
              )}
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
    marginVertical: 15,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.teal,
    height: 60,
  },
  title: {
    fontFamily: FONTS.bold,
    width: '60%',
    textAlign: 'center',
    color: COLORS.white,
  },
  logo: {
    width: 90,
    height: 40,
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ApplicationScreen;
