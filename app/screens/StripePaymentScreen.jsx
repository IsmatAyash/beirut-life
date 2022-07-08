import { useEffect, useState, useContext } from 'react';
import { Alert, Text, StyleSheet, View, Image } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

import { PaymentScreen, PayButton, Screen } from '../components';
import { API_URL } from '../Config';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import { printPolicy } from '../helpers';
import routes from '../navigation/routes';
import { PolicyContext } from '../context/policyContext';

const StripePaymentScreen = ({ navigation }) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoadng] = useState(false);
  const [clientSecret, setClientSecret] = useState();
  const { policy } = useContext(PolicyContext);

  console.log('POLICY IN StripePaymentScreen', policy);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/stripe/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: policy.premium,
        name: policy.insuredName,
      }),
    });
    const { clientSecret, name } = await response.json();

    setClientSecret(clientSecret);
    return {
      clientSecret,
      name,
    };
  };

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    setLoadng(true);
    const { error } = await presentPaymentSheet({
      clientSecret,
    });

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'The payment was confirmed successfully');
      const destPolicy = await printPolicy(policy);
    }
    setPaymentSheetEnabled(false);
    setLoadng(false);
    navigation.navigate(routes.HOME);
  };

  const initialisePaymentSheet = async () => {
    const { clientSecret, name } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: name,
      paymentIntentClientSecret: clientSecret,
      customFlow: false,
      merchantDisplayName: 'Beirut Life',
      style: 'alwaysDark',
    });
    if (!error) {
      setPaymentSheetEnabled(true);
    }
  };

  useEffect(() => {
    // In your app’s checkout, make a network request to the backend and initialize PaymentSheet.
    // To reduce loading time, make this request before the Checkout button is tapped, e.g. when the screen is loaded.
    initialisePaymentSheet();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <PaymentScreen>
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.title}>{policy.title}</Text>
        </View>

        {Object.entries(policy).map((item) => (
          <View
            key={item[0]}
            style={{ flexDirection: 'row', marginVertical: 3 }}
          >
            {item[0] !== 'intro' && (
              <Text style={styles.detail}>
                {item[0].charAt(0).toUpperCase() + item[0].slice(1)} :{' '}
              </Text>
            )}
            <Text style={styles.detailValue}>
              {/* moment("06/22/2015", "MM/DD/YYYY", true).isValid() */}

              {item[1] instanceof Date
                ? new Date(item[1]).toLocaleDateString('fr-FR')
                : item[1]}
            </Text>
          </View>
        ))}

        <View style={styles.buttons}>
          <PayButton
            variant="primary"
            loading={loading}
            disabled={!paymentSheetEnabled}
            title="Checkout"
            onPress={openPaymentSheet}
          />
          <PayButton
            variant="primary"
            title="Back"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </Screen>
    // </PaymentScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: COLORS.slate,
    justifyContent: 'space-evenly',
    padding: 5,
  },
  header: {
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
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  detail: {
    fontFamily: FONTS.bold,
    paddingLeft: SIZES.large,
  },
  detailValue: {
    paddingLeft: SIZES.base,
  },
});
export default StripePaymentScreen;
