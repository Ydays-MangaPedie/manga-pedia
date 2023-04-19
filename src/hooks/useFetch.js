import { useState, useEffect } from 'react';

const useFetch = (url, body, method) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const fetchUrl = `http://localhost:4000/api/v1${url}`;
  const fetchData = async () => {
    try {
      const response = await fetch(fetchUrl, {
        headers: {
          'Content-Type': 'Application/json',
        },
        method: method,
        ...(body && {
          body: JSON.stringify(body),
        }),
      });
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Something went wrong!');
      }
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  return { error, data, fetchData };
};

export default useFetch;
