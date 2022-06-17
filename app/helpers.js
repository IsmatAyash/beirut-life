import { Alert } from 'react-native';
import { API_URL } from './Config';
import logo from './constants/assets';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export async function fetchPublishableKey(paymentMethod) {
  try {
    const response = await fetch(
      `${API_URL}/stripe-key?paymentMethod=${paymentMethod}`
    );

    const { publishableKey } = await response.json();

    return publishableKey;
  } catch (e) {
    console.warn('Unable to fetch publishable key. Is your server running?');
    Alert.alert(
      'Error',
      'Unable to fetch publishable key. Is your server running?'
    );
    return null;
  }
}

export async function printPolicy(data) {
  const html = `
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
  <img
    src={${logo}}
    style="width: 90vw;" />
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${data.fullName}
    </h1>
  </body>
</html>
  `;

  const { uri } = await Print.printToFileAsync({
    html,
  });
  console.log('File has been saved to:', uri);
  await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  return uri;
}
