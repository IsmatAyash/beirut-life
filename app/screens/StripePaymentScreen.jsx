import { useEffect, useState } from 'react';
import { Alert, Text, StyleSheet, View, Image } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import { PaymentScreen, PayButton, Screen } from '../components';
import { API_URL } from '../Config';
import { COLORS, FONTS, assets } from '../constants';
import { printPolicy } from '../helpers';
import { WebView } from 'react-native-webview';

import moment from 'moment';

const StripePaymentScreen = ({ route, navigation }) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoadng] = useState(false);
  const [clientSecret, setClientSecret] = useState();
  const [pdfFile, setPdfFile] = useState(false);
  const { data } = route.params;

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    setClientSecret(paymentIntent);
    return {
      paymentIntent,
      ephemeralKey,
      customer,
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
      console.log('PDF data', data);
      const policy = await printPolicy(data);
      if (policy) setPdfFile(true);
      console.log('pdf file path', policy);
    }
    setPaymentSheetEnabled(false);
    setLoadng(false);
  };

  const initialisePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      customFlow: false,
      merchantDisplayName: 'Example Inc.',
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
    <PaymentScreen>
      <Screen>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={assets.logo}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.title}>Application Form</Text>
          </View>

          {Object.entries(data).map((item) => (
            <View
              key={item[0]}
              style={{ flexDirection: 'row', marginVertical: 3 }}
            >
              <Text style={{ fontStyle: 'bold' }}>
                {item[0].charAt(0).toUpperCase() + item[0].slice(1)} :{' '}
              </Text>
              <Text>
                {item[1] instanceof Date
                  ? moment(item[1]).format('DD/MM/YYYY')
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
        {pdfFile && (
          <WebView
            originWhitelist={['*']}
            source={{ html: '<h1><center>Hello world</center></h1>' }}
          />
        )}
      </Screen>
    </PaymentScreen>
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
});
export default StripePaymentScreen;
