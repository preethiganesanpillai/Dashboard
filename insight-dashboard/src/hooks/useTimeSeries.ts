import { useEffect, useState } from 'react';

type TimeSeriesData = {
  timestamp: string;
  value: number;
};

const useTimeSeries = () => {
  const [data, setData] = useState<TimeSeriesData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/alb90/aieng-tech-test-timeseries/data')
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useTimeSeries;
