import { useContext } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

import { PayButton, Screen } from '../components';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import { PolicyContext } from '../context/policyContext';
import useStripePay from '../hooks/useStripePay';

const StripePaymentScreen = ({ navigation }) => {
  const { policy } = useContext(PolicyContext);
  const { openPaymentSheet, loading, paymentSheetEnabled } = useStripePay();

  return (
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
            {item[0] !== 'intro' ? (
              <Text style={styles.detail}>
                {item[0].charAt(0).toUpperCase() + item[0].slice(1)} :{' '}
              </Text>
            ) : null}
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
