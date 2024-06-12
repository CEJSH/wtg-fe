'use client';

import CommonProvider from '@/app/_common/common';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import SearchedAreaLayout from './showSeachedAreaLayout';
const client = new QueryClient();

const Map = () => {
  const searchParams = useSearchParams();
  const lat = searchParams.get('latitude');
  const long = searchParams.get('longitude');
  const b_code = searchParams.get('b_code');

  useEffect(() => {
    // const createMap = () => {
    //   if (mapContainerRef.current) {
    //     console.log('rendered');
    //     const container = mapContainerRef.current;
    //     const options = {
    //       center: new kakao.maps.LatLng(Number(lat), Number(long)),
    //       level: 3,
    //     };
    //     const userViewMap = new kakao.maps.Map(container, options);
    //     // 마커가 표시될 지점
    //     const markerPosition = new kakao.maps.LatLng(Number(lat), Number(long));
    //     // 마커를 생성합니다
    //     const marker = new kakao.maps.Marker({
    //       position: markerPosition,
    //     });
    //     // 마커가 지도 위에 표시되도록 설정합니다
    //     marker.setMap(userViewMap);
    //   }
    // };
    // createMap();
  }, [lat]);
  return (
    <QueryClientProvider client={client}>
      <CommonProvider>
        <SearchedAreaLayout lat={lat!} long={long!} b_code={b_code!} />
      </CommonProvider>
    </QueryClientProvider>
  );
};

export default Map;
