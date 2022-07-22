/* eslint-disable semi */
import { useCallback, useEffect } from 'react';

const usePayments = () => {
  // const [SessionID, setSessionID] = useState(null)

  const errorCallback = useCallback((error) => {
    console.log(error);
  }, []);

  window.cancelCallback = useCallback((error) => {
    console.log('cancel');
  }, []);

  window.CompleteResults = useCallback((response) => {
    console.log('CompleteResults');
    console.log('successIndicator: ' + JSON.stringify(response));
  }, []);

  useEffect(() => {
    const loadScript = async () => {
      if (!document) {
        return Promise.reject();
      }

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject();
        }, 5000);

        const prevScript = document.getElementById('checkout-js');

        if (prevScript) {
          prevScript.remove();
        }

        const script = document.createElement('script');
        const datacancel = 'data-cancel';
        script.src =
          'https://test-bobsal.gateway.mastercard.com/checkout/version/61/checkout.js';
        script.onerror = reject;
        script.id = 'checkout-js';
        // script['data-error'] = `${errorCallback}`
        //script['data-cancel'] = cancelCallback
        script.setAttribute('data-cancel', 'cancelCallback');
        script.setAttribute('data-complete', 'CompleteResults');
        script.onload = () => resolve();

        document.body.appendChild(script);
      });
    };
    loadScript();

    return () => {
      const prevScript = document.getElementById('checkout-js');
      if (prevScript) {
        prevScript.remove();
      }
    };
  }, [errorCallback]);

  const createCheckout = useCallback((ID) => {
    const { Checkout } = window;

    if (!Checkout) {
      return;
    }

    Checkout.configure({
      merchant: 'BBROKERS',
      session: {
        id: ID,
      },
      interaction: {
        merchant: {
          name: 'BBROKERS',
          address: {
            line1: '200 Sample St',
            line2: '1234 Example Town',
          },
        },
      },
    });

    Checkout.showLightbox();
  }, []);

  return { createCheckout };
};

export default usePayments;
