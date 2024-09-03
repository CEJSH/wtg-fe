import { useCallback, useState } from 'react';
import { getPositionsFromData } from '@/services/kakao';

export const useFetchPositions = () => {
  const [positions, setPositions] = useState<{ title: string; latlng: any; cDay: string }[]>([]);

  const fetchPositions = useCallback(async (data: any) => {
    try {
      const validPositions = await getPositionsFromData(data);
      setPositions(validPositions);
    } catch (error) {
      console.error('Failed to fetch positions:', error);
    }
  }, []);

  return { positions, fetchPositions };
};
