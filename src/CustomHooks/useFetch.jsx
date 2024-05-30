/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          } else {
            return res.json();
          }
        })
        .then((json) => {
          setData(json);
          setIsLoaded(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoaded(false);
        });
    }, 2000);
  }, [url]);
  return { data, isloaded, error };
};

export default useFetch;
