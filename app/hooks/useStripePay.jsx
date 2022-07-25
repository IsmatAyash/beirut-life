import { useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

import { PolicyContext } from '../context/policyContext';
import { API_URL } from '../Config';
import { printPolicy, postSale } from '../helpers';
import routes from '../navigation/routes';

const useStripePay = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoadng] = useState(false);
  const [clientSecret, setClientSecret] = useState();
  const { policy } = useContext(PolicyContext);

  const fetchPaymentSheetParams = async () => {
    try {
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
    } catch (err) {
      console.log(err.message);
    }
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
      await postSale(policy);
      await printPolicy(policy);
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

  return { openPaymentSheet, loading, paymentSheetEnabled };
};

export default useStripePay;
