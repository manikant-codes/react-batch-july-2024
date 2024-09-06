import { useEffect, useState } from "react";

export function useFetch(getData, dependencies) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [...dependencies]);

  return { loading, data, error, setData };
}
