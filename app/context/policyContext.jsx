import { useState, createContext, useEffect } from 'react';

const PolicyContext = createContext();

const PolicyProvider = ({ children }) => {
  const [policy, setPolicy] = useState({});

  useEffect(() => {
    setPolicy({
      intro: null,
      insuredName: 'Ismat Ayash',
      address: 'Vidinstein ared jalloul',
      telephone: '961 3 26765456',
      email: 'example@gmail.com',
      duration: 5,
      dateOfBirth: new Date('10/12/1964'),
      beneficiary: 'ALexy Ayash',
      nationality: 'Lebanese',
      dateOfBirth: new Date(),
      effectiveDate: new Date(),
      title: '',
      policyNumber: '',
      policyCode: '',
      sumInsured: 0,
      policyRider: '',
      currency: 'USD',
      premium: 0,
      exclusion: '',
      issuanceDate: new Date(),
      expiryDate: new Date(),
    });
  }, []);
  return (
    <PolicyContext.Provider
      value={{ policy, updatePolicy: (pol) => setPolicy(pol) }}
    >
      {children}
    </PolicyContext.Provider>
  );
};

export { PolicyProvider, PolicyContext };
