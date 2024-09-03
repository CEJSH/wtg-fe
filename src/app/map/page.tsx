'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import GridSpinner from '@/components/ui/GridSpinner';
import { RecoilRoot } from 'recoil';
import ResultSection from '@/containers/map/ResultSection';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const MapPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={<GridSpinner />}>
          <ResultSection />
        </Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MapPage;
