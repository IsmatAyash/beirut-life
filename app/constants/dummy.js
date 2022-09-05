import assets from './assets';

const setting = {
  slogan: 'Because we live everyday',
  greeting: 'We make sure you are Safe & Covered',
};

const InsData = [
  {
    id: 'ACC-01',
    name: 'Personal Accident',
    creator: 'Beirut Life',
    premium: 45,
    unit: '',
    fixedPremium: true,
    description:
      'Get the affordable personal accident insurance coverage you deserve. With Beirut Life, worry-free since you are covered while on the journey. We offer you coverage for car accidental death, permanent disability, passive war risk and hospital cash benefits.',
    covers: [
      'Accidental Death',
      'Total Permanent Disability due to Accident - TPD',
      'Passive War Risk - PWR ',
      'Hospital Cash Benefit for a max of 15 days',
    ],
    sumInsured: 7500,
    sumInsuredRemark:
      'USD 50 paid in cash as hospital benefits for a max of 15 days',
    remark: null,
    image: assets.ThirdPartyLiab,
    category: 'Accident',
    intro:
      'Here goes the introduction of the policy summarizing benefits and terms. replace this text with the appropriate text and sufficient explanation for the insured to understand. decide whether you would like to attach the terms and conditions with every policy you print:',
  },
  {
    id: 'TRV-01',
    name: 'Flight Accident',
    creator: 'Beirut Life',
    premium: 1,
    unit: '',
    fixedPremium: false,
    description:
      'Get the affordable car insurance coverage you deserve. With Beirut Brokers, drive your car worry-free since you are covered while on the road. We offer you coverage for car parts and repairs to someone else’s property. Get the affordable car insurance coverage you deserve. Vehicle-related damage shouldn’t mean you have to pump the brakes on a payday. With Beirut Brokers you’re covered for car parts and damage to someone else’s property.',
    covers: [
      'Accidental Death',
      'Total Permanent Disability due to Accident - TPD',
      'Passive War Risk - PWR ',
    ],
    sumInsured: 20000,
    sumInsuredRemark: null,
    remark:
      'You can buy both trip and flight accidents together. Please refer to the item titled "Flight and Trip Accident"',
    image: assets.flight,
    category: 'Travel',
    intro:
      'Here goes the introduction of the policy summarizing benefits and terms. replace this text with the appropriate text and sufficient explanation for the insured to understand. decide whether you would like to attach the terms and conditions with every policy you print:',
  },
  {
    id: 'TRV-02',
    name: 'Trip Accident',
    creator: 'Beirut Life',
    premium: 0.5,
    unit: 'per trip per day',
    fixedPremium: false,
    description:
      'Get the affordable car insurance coverage you deserve. With Beirut Brokers, drive your car worry-free since you are covered while on the road. We offer you coverage for car parts and repairs to someone else’s property.',
    covers: [
      'Accidental Death',
      'Total Permanent Disability due to Accident - TPD',
      'Passive War Risk - PWR ',
    ],
    sumInsured: 20000,
    sumInsuredRemark: null,
    remark:
      'You can buy both trip and flight accidents together. Please refer to the item titled "Flight and Trip Accident"',
    image: assets.trip,
    category: 'Travel',
    intro:
      'Here goes the introduction of the policy summarizing benefits and terms. replace this text with the appropriate text and sufficient explanation for the insured to understand. decide whether you would like to attach the terms and conditions with every policy you print:',
  },
  {
    id: 'TRV-03',
    name: 'Trip and Flight Accidents',
    creator: 'Beirut Life',
    premium: 1.5,
    unit: 'per trip per day',
    fixedPremium: false,
    description:
      'Purchasing a holiday is always an exciting experience and it’s likely you’ll want to make regular trips overseas to visit it. That is why we’ve teamed up with the best insurers to offer you a travel insurance policy.',
    covers: [
      'Accidental Death',
      'Total Permanent Disability due to Accident - TPD',
      'Passive War Risk - PWR ',
    ],
    sumInsured: 40000,
    sumInsuredRemark: null,
    remark: null,
    image: assets.travel,
    category: 'Travel',
    intro:
      'Here goes the introduction of the policy summarizing benefits and terms. replace this text with the appropriate text and sufficient explanation for the insured to understand. decide whether you would like to attach the terms and conditions with every policy you print:',
  },
  {
    id: 'MED-01',
    name: 'Medical Insurance',
    creator: 'Beirut Life',
    premium: 100,
    unit: '',
    fixedPremium: true,
    description:
      'A simple, affordable way to financially protect the ones you love Term life insurance is the top choice for people who want to offer financial security to their family when the unexpected happens to the life insured during the active term of the policy. Let your loved ones be cared for and plan for the unexpected.',
    covers: ['In hospital Death', 'Out of hospital'],

    sumInsured: 50000,
    sumInsuredRemark: null,
    remark: null,
    image: assets.life,
    category: 'Medical',
    intro:
      'Here goes the introduction of the policy summarizing benefits and terms. replace this text with the appropriate text and sufficient explanation for the insured to understand. decide whether you would like to attach the terms and conditions with every policy you print:',
  },
];

const sales = [
  {
    id: 1,
    intro:
      'Here goes the introduction of the policy summarizing benefits and terms. replace this text with the appropriate text and sufficient explanation for the insured to understand. decide whether you would like to attach the terms and conditions with every policy you print:',
    insuredName: 'Ismat Ayash',
    address: 'Choueifat',
    telephone: '961 32646536',
    gender: 'Male',
    dateOfBirth: '10/12/1964',
    nationality: 'Lebanese',
    effectiveDate: '01/06/2022',
    duration: 5,
    beneficiary: 'Alexy Ayash',
    title: 'Personal Accident',
    policyNumber: '001/00001/ACC-01/22',
    policyCode: 'ACC-01',
    sumInsured: 7500,
    policyRider: '',
    currency: 'USD',
    premium: 4.5,
    exclusion: '',
    issuanceDate: '01/06/2022',
    expiryDate: '06/06/2022',
  },
  {
    id: 2,
    intro:
      'Here goes the introduction of the policy summarizing benefits and terms. replace this text with the appropriate text and sufficient explanation for the insured to understand. decide whether you would like to attach the terms and conditions with every policy you print:',
    insuredName: 'Nancy Khoury',
    address: 'Choueir',
    telephone: '961 32645444',
    gender: 'Female',
    dateOfBirth: '10/12/1984',
    nationality: 'Lebanese',
    effectiveDate: '01/06/2022',
    duration: 5,
    beneficiary: 'Jone Doe',
    title: 'Trip Accident',
    policyNumber: '001/00002/TRV-02/22',
    policyCode: 'TRV-02',
    sumInsured: 8500,
    policyRider: '',
    currency: 'USD',
    premium: 10,
    exclusion: '',
    issuanceDate: '06/06/2022',
    expiryDate: '11/06/2022',
  },
];

export { InsData, setting, sales };
