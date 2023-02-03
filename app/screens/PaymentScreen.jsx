import { WebView } from 'react-native-webview';
import { StyleSheet, View, Alert, StatusBar } from 'react-native';
import { useContext } from 'react';

import { Screen, CircleButton } from '../components';
import { BBC_PAY_URL, BBC_PAY_URL_LOCAL } from '../Config';
import { PolicyContext } from '../context/policyContext';
import { printPolicy, postSale } from '../helpers';
import routes from '../navigation/routes';
import { assets, COLORS } from '../constants';

const PaymentScreen = ({ navigation, route }) => {
  const { policy } = useContext(PolicyContext);
  const sessionId = route.params.sessionId;
  const orderId = route.params.orderId;
  const { insured, premium, currency, title } = route.params.details;
  const url = `${BBC_PAY_URL_LOCAL}?session_id=${sessionId}&insured=${insured}&title=${title}&currency=${currency}&premium=${premium}`
  const handlePost = async (msg) => {
    if (msg === 'Completed!') {
      Alert.alert('Success', 'The payment was confirmed successfully');
      await postSale({ ...policy, orderId: orderId, source: 'PAYGATE' });
      await printPolicy(policy);
      navigation.navigate(routes.HOME);
    } else {
      Alert.alert(`Payment ${msg}`);
      navigation.navigate(routes.HOME);
    }
  };

  return (
    <Screen>
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <CircleButton
          imgUrl={assets.left}
          onPress={() => navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
          bgColor={COLORS.blurple}
        />
      </View>

      <View style={styles.container}>
        <WebView
          source={{
            uri: url,
          }}
          style={styles.webview}
          onMessage={({ nativeEvent }) => {
            handlePost(nativeEvent.data);
          }}
        />
      </View>
    </Screen>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  webview: {
    marginTop: 20,
    marginLeft: 20,
    maxHeight: 600,
    width: 320,
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
