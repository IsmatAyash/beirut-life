import { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Screen, FocusedStatusBar, CircleButton, Icon } from '../components';
import { assets, COLORS, FONTS, SIZES } from '../constants';
import routes from '../navigation/routes';
import { PolicyContext } from '../context/policyContext';
import useGetSessionId from '../hooks/useGetSessionId';
import useStripePay from '../hooks/useStripePay';
import { postSale } from '../helpers';

const CheckoutScreen = ({ navigation }) => {
  const { policy } = useContext(PolicyContext);
  const paydetails = Object.assign({
    premium: policy.premium,
    currency: policy.currency,
    title: policy.title,
    insured: policy.insuredName,
  });
  console.log("policyyyy ->", policy)
  const { sessionId, orderId } = useGetSessionId(paydetails);
  const { openPaymentSheet } = useStripePay();

  const handleCash = async () => {
    await postSale({ ...policy, orderId: '', source: 'CASH' });
    Alert.alert(
      'Your sale was posted successfully, please arrange for the payment to receive the policy'
    );
    navigation.navigate(routes.HOME);
  };

  return (
    <Screen style={styles.container}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.imageCtr}>
        <Image
          source={assets.payment}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.title}>
          <CircleButton
            imgUrl={assets.left}
            onPress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
          />
          <Text style={styles.titleText}>Payment Method</Text>
          <Image
            source={assets.logo}
            style={{ width: 120, height: 60, marginTop: 10 }}
          />
        </View>
      </View>
      <View style={styles.details}>
        <PaymentMethod
          onPress={() =>
            navigation.navigate(routes.PAYMENT, {
              sessionId,
              orderId,
              details: paydetails,
            })
          }
          text="Credit Card Payment using BoB paygate"
          image={assets.logo}
          width={110}
        />
          <PaymentMethod
          disabled={true}
          onPress={() =>
            navigation.navigate(routes.PAYMENT, {
              sessionId,
              orderId,
              details: paydetails,
            })
          }
          text="COMING SOON! Recurring Card Payment using BoB paygate"
          image={assets.logo}
          width={110}
        />
        {/* <PaymentMethod
          onPress={handleCash}
          text="Pay cash in office or BoBFinance"
          iconColor={COLORS.blurple}
          icon="cash"
        />
        <PaymentMethod
          onPress={openPaymentSheet}
          text="Pay using Stripe payment gateway"
          image={assets.stripe}
        /> */}
      </View>
    </Screen>
  );
};

const PaymentMethod = ({
  onPress,
  text,
  iconColor,
  icon,
  image,
  width = 50,
  disabled
}) => {
  const imageLogo = { width: width, height: 50 };
  return (
    <TouchableOpacity style={disabled? styles.disabledCash:styles.cash} onPress={onPress} disabled={disabled} >
      {image ? (
        <Image source={image} style={imageLogo} />
      ) : (
        <Icon name={icon} backgroundColor={iconColor} />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  imageCtr: {
    width: '100%',
    height: 373,
  },
  image: { width: '100%', height: '100%' },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  cash: {
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.green,
    borderRadius: 5,
    padding: 5,
    backgroundColor: COLORS.white,
  }, 
  disabledCash: {
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.green,
    borderRadius: 5,
    padding: 5,
    backgroundColor: COLORS.white,
    opacity:0.5
  },
  text: {
    marginVertical: 5,
    fontFamily: FONTS.bold,
    maxWidth: 200,
    textAlign: 'center',
  },
  title: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  titleText: {
    marginTop: 15,
    marginBottom: 2,
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
