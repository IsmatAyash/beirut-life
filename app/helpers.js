import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Asset } from 'expo-asset';
import { manipulateAsync } from 'expo-image-manipulator';
import { API_URL } from './Config';
import { commonTerms as ct, clause10 as c10 } from './constants';

const definitions = () => {
  let para = '<strong>Clause 1: DEFINITIONS</strong>';
  for (const [key, value] of Object.entries(ct.defs)) {
    para += `
    <article>
      ${
        key === 'list'
          ? `<ol>${value.reduce(
              (ele, item) => (ele += `<li>${item}`),
              ''
            )}</ol>`
          : `<span><strong>${key}</strong>${value}</span>`
      }
    </article>
    `;
  }
  return para;
};

const Clauses = () => {
  let para = '';
  for (const [key, value] of Object.entries(ct.clauses)) {
    para += `<strong>${key}</strong>
      <article>
            ${
              key === 'list'
                ? `<ol>${value.reduce(
                    (ele, item) => (ele += `<li>${item}`),
                    ''
                  )}</ol>`
                : `<span class="clause-para">${value}</span>`
            }      
      </article>`;
  }
  return para;
};

const clauseTen = (prodCode) => {
  let para = '<strong>Clause 10 - Additional Conditions</strong> <article>';
  // school protector
  if (prodCode === 'ACC-02') return (para += c10[prodCode]);

  // hospital bill gap
  if (prodCode === 'ACC-03') {
    para += `<ul>${c10[prodCode].reduce(
      (ele, item) => (ele += `<li>${item}`),
      ''
    )}</ul>`;
    return (para += '<article');
  }
  return '';
};

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
        body {
          font: normal 10px Verdana, Arial, sans-serif;
        }
        .pdf-header {
          padding-left: 10px;
        }

        .pdf-value {
          font-weight: bold;
        }

        .general-terms-h1 {
          text-align: center;
        }

        .line-wrap {
          word-wrap: break-word;
        }

        .clause-para {
          margin-bottom: 10px;
          display: inline-block;
        }

        .signatures {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
        }

        .signature-beirut,
        .signature-insured {
          font-weight: bold;
          border-top:1px solid black;
          width: 200px;
        }
      </style>
      <body >
      <div style='display: flex; flex-direction: column;' >
        <img  src="data:image/jpeg;base64,${
          image.base64
        }"  style="width: 20vw;" />
        <h1 style='text-align: center; padding: 50px; font-family: Helvatica Neue; font-weight: normal;'>${
          data.title
        }</h1>
      <div>${data.intro}</div>
      </div>
        <br />
        <div class="pdf-header">Policy Number : <span class="pdf-value">${
          data.policyNumber
        }</span></div>
        <div class="pdf-header">Insured Name : <span class="pdf-value">${
          data.insuredName
        }</span> </div>
        <div class="pdf-header">Address :  <span class="pdf-value">${
          data.address
        }</span></div>
        <div class="pdf-header">Telephone :  <span class="pdf-value">${
          data.telephone
        }</span></div>
        <div class="pdf-header">Date of Birth :  <span class="pdf-value">${
          data.dateOfBirth
        }</span></div>
        <div class="pdf-header">Nationality :  <span class="pdf-value">${
          data.nationality
        }</span></div>
        <div class="pdf-header">Effective Date : <span class="pdf-value">${
          data.effectiveDate
        }</span></div>
        <div class="pdf-header">Duration : <span class="pdf-value">${
          data.duration
        }</span></div>
        <div class="pdf-header">Beneficiary : <span class="pdf-value">${
          data.beneficiary
        }</span></div>
        <div class="pdf-header">Sum Insured : <span class="pdf-value">${
          data.sumInsured
        }</span></div>
        <div class="pdf-header">Currency : <span class="pdf-value">${
          data.currency
        }</span></div>
        <div class="pdf-header">Premium : <span class="pdf-value">${
          data.premium
        }</span></div>
        <div class="pdf-header">Issuance Date : <span class="pdf-value">${
          data.issuanceDate
        }</span></div>
        <div class="pdf-header" style="page-break-after: always;">Expiry Date : <span class="pdf-value">${
          data.expiryDate
        }</span></div>
        <article class="general-terms">
        <h1 class="general-terms-h1">Life Insurance Policy</h1>
        <h3 class="general-terms-h1">General Conditions</h3>
        <p class="line-wrap">${ct.intro}</p>
        ${definitions()}
        ${Clauses()}
        ${clauseTen(data.productCode)}
        </article>
      </body>
      <footer class="signatures">
      <span class="signature-beirut">Beirut Life (Digitaly Signed)</span>
      <span class="signature-insured">The Insured</span>
      </footer>
    </html>  `;
};

const printPolicy = async (data) => {
  const html = await genPolicy(data);

  const { uri } = await Print.printToFileAsync({
    html,
  });
  console.log('File has been saved to:', uri);
  await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  return uri;
};

const postSale = async (data) => {
  try {
    const response = await fetch(`${API_URL}/sale/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log('Sale successfuly posted', stringify.JSON(response));
  } catch (err) {
    console.log(err.message);
  }
};

export { printPolicy, postSale };
