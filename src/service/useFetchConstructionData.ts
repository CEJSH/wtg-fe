import { useQuery } from '@tanstack/react-query';

export const useFetchConstructionData = (b_code: string | null, BaseURL: string) => {
  return useQuery({
    queryKey: ['getSearchedRegionData', b_code],
    queryFn: async () => {
      if (!b_code) {
        throw new Error('b_code is required');
      }
      const response = await fetch(`${BaseURL}/construction/get-by-searched-region?b_code=${b_code}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
    enabled: !!b_code,
  });
};
