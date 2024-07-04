'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchedArea from './SeachedArea';
const client = new QueryClient();

const MapPage = () => {
  return (
    <QueryClientProvider client={client}>
      <SearchedArea />
    </QueryClientProvider>
  );
};

export default MapPage;
