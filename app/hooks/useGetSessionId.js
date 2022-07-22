import { useState, useEffect } from 'react';
import { API_URL } from '../Config';

const useGetSessionId = ({premium, currency, title}) => {
  const [sessionId, setSessionId] = useState('');

  const fetchSession = async () => {
    try {
      const response = await fetch(`${API_URL}/bobpay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          premium,
          currency,
          title,
        }),
      });
      const sid = await response.json();

      setSessionId(sid.session.id);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return { sessionId };
};

export default useGetSessionId;
