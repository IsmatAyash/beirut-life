import { useEffect, useState } from 'react';
import { initStripe } from '@stripe/stripe-react-native';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';

import { COLORS } from '../../constants';
import { STRIPE_PUBLISHABLE_KEY } from '../../Config';

const PaymentScreen = ({ paymentMethod, children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initialize() {
      // const publishableKey = await fetchPublishableKey(paymentMethod);
      // if (publishableKey) {
      await initStripe({
        publishableKey: STRIPE_PUBLISHABLE_KEY,
        merchantIdentifier: 'beirut-life-id-in-stripe',
        urlScheme: 'stripe-example',
        setUrlSchemeOnAndroid: true,
      });
      setLoading(false);
    }
    // }
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
  ) : (
    <ScrollView
      accessibilityLabel="payment-screen"
      style={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {children}
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Text style={{ opacity: 0 }}>appium fix</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});

export default PaymentScreen;
