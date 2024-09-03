import { fetchConstructionData } from '@/services/construction';
import { useQuery } from '@tanstack/react-query';

export const useFetchConstructionData = (b_code: string | null, BaseURL: string) => {
  return useQuery({
    queryKey: ['getSearchedRegionData', b_code],
    queryFn: () => fetchConstructionData(b_code, BaseURL),
    enabled: !!b_code,
  });
};
