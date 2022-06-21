import { Alert } from 'react-native';
import { API_URL } from './Config';
import logo from './assets/images/logo.png';
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

const genPolicy = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title></title>
      <meta name="Beirut Life" content="">
      <meta name="Generated html document for the policy" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script src='https://unpkg.com/rahulrsingh09-stenciltest2@0.0.3/dist/test/test.js'></script>
    </head>
    <body>
    <h1 style='text-align=center; padding: 50px'>Peraonal Accident</h1>
    </body>
    </html>  `;
};

export async function printPolicy(data) {
  const html = genPolicy(data);

  const { uri } = await Print.printToFileAsync({
    html,
  });
  console.log('File has been saved to:', uri);
  await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  return uri;
}
