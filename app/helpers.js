import { Alert } from 'react-native';
import { API_URL } from './Config';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Asset } from 'expo-asset';
import { manipulateAsync } from 'expo-image-manipulator';

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

const genPolicy = async (data) => {
  const asset = Asset.fromModule(require('./assets/images/logo.png'));
  const image = await manipulateAsync(asset.localUri ?? asset.uri, [], {
    base64: true,
  });
  return `
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="Beirut Life" content="">
        <meta name="Generated html document for the policy" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      </head>
      <style>
        .pdf-header {
          padding-left: 10px;
        }

        .pdf-value {
          font-weight: bold;
        }
      </style>
      <body >
      <div style='display: flex; flex-direction: column;' >
        <img  src="data:image/jpeg;base64,${image.base64}"  style="width: 20vw;" />
        <h1 style='text-align: center; padding: 50px; font-family: Helvatica Neue; font-weight: normal;'>${data.title}</h1>
      <div>${data.intro}</div>
      </div>
        <br />
        <div class="pdf-header">Policy Number : <span class="pdf-value">${data.policyNumber}</span></div>
        <div class="pdf-header">Insured Name : <span class="pdf-value">${data.insuredName}</span> </div>
        <div class="pdf-header">Address :  <span class="pdf-value">${data.address}</span></div>
        <div class="pdf-header">Telephone :  <span class="pdf-value">${data.telephone}</span></div>
        <div class="pdf-header">Date of Birth :  <span class="pdf-value">${data.dateOfBirth}</span></div>
        <div class="pdf-header">Nationality :  <span class="pdf-value">${data.nationality}</span></div>
        <div class="pdf-header">Effective Date : <span class="pdf-value">${data.effectiveDate}</span></div>
        <div class="pdf-header">Duration : <span class="pdf-value">${data.duration}</span></div>
        <div class="pdf-header">Beneficiary : <span class="pdf-value">${data.beneficiary}</span></div>
        <div class="pdf-header">Sum Insured : <span class="pdf-value">${data.sumInsured}</span></div>
        <div class="pdf-header">Currency : <span class="pdf-value">${data.currency}</span></div>
        <div class="pdf-header">Premium : <span class="pdf-value">${data.premium}</span></div>
        <div class="pdf-header">Issuance Date : <span class="pdf-value">${data.issuanceDate}</span></div>
        <div class="pdf-header">Expiry Date : <span class="pdf-value">${data.expiryDate}</span></div>
      </body>
    </html>  `;
};

export async function printPolicy(data) {
  const html = await genPolicy(data);

  const { uri } = await Print.printToFileAsync({
    html,
  });
  console.log('File has been saved to:', uri);
  await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  return uri;
}
