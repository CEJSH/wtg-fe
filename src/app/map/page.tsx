import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import GridSpinner from '@/components/ui/GridSpinner';
import ResultSection from '@/components/ResultSection';
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
      <Suspense fallback={<GridSpinner />}>
        <ResultSection />
      </Suspense>
    </QueryClientProvider>
  );
};

export default MapPage;
