import React, { useState } from 'react';
import axios from 'axios';

const useSearchApi = () => {
  const [onAirData, setOnAirData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const url =
    'https://shopping-on-air-default-rtdb.asia-southeast1.firebasedatabase.app/.json';

  axios
    .get(url)
    .then(function (res) {
      setOnAirData(res.data);
      setLoading(false);
      console.log('성공', res.data, loading);
    })
    .catch(function (error) {
      console.log('실패');
      setError(error);
      setLoading(false);
    });
  console.log('성공', onAirData);
  // console.log(onAirData[0].day, '이거');

  return { onAirData, loading, error };
};

export default useSearchApi;
