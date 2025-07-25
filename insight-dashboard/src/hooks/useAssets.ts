import { useEffect, useState } from 'react';

export type Asset = {
  id: number;
  name: string;
  totalViews: {
    total: number;
  };
  description: string;
  assetImage?: string;
  videoImage?: string;
  genre?: string[];
};

export const useAssets = () => {
  const [data, setData] = useState<Asset[]>([]);
  const [genres, setGenres] = useState<string[]>(['All']);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data')
      .then((res) => res.json())
      .then((json) => {
        setData(json);

        const genreSet = new Set<string>();
        json.forEach((item: Asset) => {
          item.genre?.forEach((g) => genreSet.add(g));
        });
        setGenres(['All', ...Array.from(genreSet)]);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, genres, isLoading, error };
};
