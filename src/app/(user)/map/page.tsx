'use client';

import CommonProvider from '@/app/_common/common';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import SearchedAreaLayout from './SeachedAreaLayout';
const client = new QueryClient();

const Map = () => {
  const searchParams = useSearchParams();
  const lat = searchParams.get('latitude');
  const long = searchParams.get('longitude');
  const b_code = searchParams.get('b_code');

  return (
    <QueryClientProvider client={client}>
      <CommonProvider>
        <SearchedAreaLayout lat={lat!} long={long!} b_code={b_code!} />
      </CommonProvider>
    </QueryClientProvider>
  );
};

export default Map;
