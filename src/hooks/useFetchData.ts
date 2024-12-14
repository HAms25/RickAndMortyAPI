import { useState, useEffect } from "react";

export interface Character {
  location: { name: string; };
  origin: { name: string; url: string; };
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export const useFetchData = (url: string) => {
  const [data, setData] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los datos.");
        }
        const result = await response.json();
        setData(result.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
