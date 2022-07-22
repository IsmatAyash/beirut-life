import { WebView } from 'react-native-webview';
import { StyleSheet, View, Alert, StatusBar } from 'react-native';
import { useContext } from 'react';

import { Screen, CircleButton } from '../components';
import { BBC_PAY_URL, API_URL } from '../Config';
import { PolicyContext } from '../context/policyContext';
import { printPolicy } from '../helpers';
import routes from '../navigation/routes';
import { assets, COLORS } from '../constants';

const PaymentScreen = ({ navigation, route }) => {
  const { policy } = useContext(PolicyContext);
  const sessionId = route.params.sessionId;
  const { insured, premium, currency, title } = route.params.details;

  const postSale = async () => {
    try {
      const response = await fetch(`${API_URL}/sale/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(policy),
      });
      console.log('Sale successfuly posted', response);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handlePost = async (msg) => {
    if (msg === 'Completed') {
      Alert.alert('Success', 'The payment was confirmed successfully');
      await postSale(policy);
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
            uri: `${BBC_PAY_URL}?session_id=${sessionId}&insured=${insured}&title=${title}&currency=${currency}&premium=${premium}`,
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
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
