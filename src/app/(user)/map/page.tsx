'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NewSearchedArea from './NewSearchedArea';
import { Suspense } from 'react';
import GridSpinner from '@/components/ui/GridSpinner';
const client = new QueryClient();

const MapPage = () => {
  return (
    <QueryClientProvider client={client}>
      {/* <SearchedArea /> */}
      <Suspense fallback={<GridSpinner />}>
        <NewSearchedArea />
      </Suspense>
    </QueryClientProvider>
  );
};

export default MapPage;
