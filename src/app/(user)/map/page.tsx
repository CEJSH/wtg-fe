'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NewSearchedArea from './NewSearchedArea';
const client = new QueryClient();

const MapPage = () => {
  return (
    <QueryClientProvider client={client}>
      {/* <SearchedArea /> */}
      <NewSearchedArea />
    </QueryClientProvider>
  );
};

export default MapPage;
