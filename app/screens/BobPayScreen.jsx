import { useContext } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Screen, PayButton } from '../components';
import { PolicyContext } from '../context/policyContext';
import { COLORS, SIZES, FONTS, assets } from '../constants';
import useGetSessionId from '../hooks/useGetSessionId';
import routes from '../navigation/routes';

export default function BobPayScreen({ navigation }) {
  const { policy } = useContext(PolicyContext);
  const paydetails = Object.assign({
    premium: policy.premium,
    currency: policy.currency,
    title: policy.title,
    insured: policy.insuredName,
  });
  const { sessionId } = useGetSessionId(paydetails);

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
            title="Checkout"
            onPress={() =>
              navigation.navigate(routes.PAYMENT, {
                sessionId: sessionId,
                details: paydetails,
              })
            }
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 5,
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
