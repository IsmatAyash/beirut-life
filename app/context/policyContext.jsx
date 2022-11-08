import { useState, createContext, useEffect } from 'react';
import { API_URL } from '../Config';

const PolicyContext = createContext();

const PolicyProvider = ({ children }) => {
  const [policy, setPolicy] = useState({});
  const [products, setProducts] = useState([]);
  const [coverages, setCoverages] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/product`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const prods = await response.json();

      setProducts(prods);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchCoverage = async () => {
    try {
      const response = await fetch(`${API_URL}/coverage`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const coverages = await response.json();

      setCoverages(coverages);
    } catch (err) {
      console.log(err.message);
    }
  };

  // setPolicy({
  //   intro: null,
  //   insuredName: 'Ismat Ayash',
  //   address: 'Vidinstein ared jalloul',
  //   telephone: '961 3 26765456',
  //   email: 'example@gmail.com',
  //   duration: 5,
  //   dateOfBirth: new Date('10/12/1964'),
  //   beneficiary: 'ALexy Ayash',
  //   nationality: 'Lebanese',
  //   dateOfBirth: new Date(),
  //   effectiveDate: new Date(),
  //   title: '',
  //   policyNumber: '',
  //   productCode: '',
  //   sumInsured: 0,
  //   policyRider: '',
  //   currency: 'USD',
  //   premium: 0,
  //   exclusion: '',
  //   issuanceDate: new Date(),
  //   expiryDate: new Date(),
  // });

  useEffect(() => {
    setPolicy({
      intro: null,
      insuredName: '',
      address: '',
      telephone: '',
      email: '',
      duration: 0,
      beneficiary: '',
      nationality: 'Lebanese',
      dateOfBirth: new Date(),
      effectiveDate: new Date(),
      title: '',
      policyNumber: '',
      productCode: '',
      sumInsured: 0,
      policyRider: '',
      currency: 'USD',
      premium: 0,
      exclusion: '',
      issuanceDate: new Date(),
      expiryDate: new Date(),
      childName: '',
      childBdate: new Date(),
    });
    fetchProducts();
    fetchCoverage();
  }, []);

  return (
    <PolicyContext.Provider
      value={{
        coverages,
        products,
        policy,
        updatePolicy: (pol) => setPolicy(pol),
      }}
    >
      {children}
    </PolicyContext.Provider>
  );
};

export { PolicyProvider, PolicyContext };
