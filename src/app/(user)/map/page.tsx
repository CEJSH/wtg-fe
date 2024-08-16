'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NewSearchedArea from '../../../components/ResultSection';
import { Suspense } from 'react';
import GridSpinner from '@/components/ui/GridSpinner';

import dynamic from 'next/dynamic';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 쿼리 실패 시 재시도 횟수
      refetchOnWindowFocus: false, // 창이 포커스될 때 자동으로 데이터 리패치 방지
    },
  },
});

const MapPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <SearchedArea /> */}
      <Suspense fallback={<GridSpinner />}>
        <NewSearchedArea />
      </Suspense>
    </QueryClientProvider>
  );
};

export default MapPage;
