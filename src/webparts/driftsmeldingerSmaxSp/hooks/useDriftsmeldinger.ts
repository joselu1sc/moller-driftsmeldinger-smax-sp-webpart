import { useEffect, useState } from 'react';
import { IDriftsmelding } from '../models/IDriftsmelding';
import { fetchDriftsmeldinger } from '../services/driftsmeldingService';

export const useDriftsmeldinger = () => {
  const [items, setItems] = useState<IDriftsmelding[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchDriftsmeldinger();
      setItems(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return { items, loading };
};