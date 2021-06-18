import { useEffect, useState } from 'react';
import axios from 'axios';

const useSearchApi = () => {
  const [onAirData, setOnAirData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const url =
    'https://shopping-on-air-default-rtdb.asia-southeast1.firebasedatabase.app/.json';

  useEffect(() => {
    axios
      .get(url)
      .then(function (res) {
        console.log('성공');
        setOnAirData(res.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log('실패');
        setError(error);
        setLoading(false);
      });
  }, []);

  return [onAirData, loading, error];
};

export default useSearchApi;
