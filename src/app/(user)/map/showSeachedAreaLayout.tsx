'use client';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

const SearchedAreaLayout = ({ lat, long, b_code }: { lat: string; long: string; b_code: string }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const BaseURL = !!process.env.NEXT_PUBLIC_BASE_SERVER_URL
    ? process.env.NEXT_PUBLIC_BASE_SERVER_URL
    : 'http://localhost:8000';
  const query = useQuery({
    queryKey: ['getSearchedRegionData'],
    queryFn: async () => {
      const response = await fetch(`${BaseURL}/map/get-by-searched-region?b_code=${b_code}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // JSON으로 변환
      return data; // 변환된 JSON 데이터만 반환
    },
  });

  const markers: { x: string; y: string }[] = [];

  const setLatLongFn = (result: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      console.log('법정', result[0]['address']['x']);
      if (result[0]['x']) {
        markers.push({ x: result[0]['x'], y: result[0]['y'] });
      }
    }
    if (status === kakao.maps.services.Status.ZERO_RESULT) {
      return;
    }
  };

  useEffect(() => {
    if (mapContainerRef.current) {
      const geocoder = new kakao.maps.services.Geocoder();
      if (query.data && query.data.data) {
        console.log('here');
        const searchedData = query.data.data;
        searchedData.forEach(async (d: any, i: any) => {
          console.log(d['platPlc']);
          geocoder.addressSearch(d['platPlc'], setLatLongFn);
          const markerPosition = new kakao.maps.LatLng(Number(lat), Number(long));
        });
      }
      console.log(markers);
    }
  }, [query, mapContainerRef.current]);
  useEffect(() => {
    const createMap = () => {
      if (mapContainerRef.current) {
        console.log('rendered');
        const container = mapContainerRef.current;
        const options = {
          center: new kakao.maps.LatLng(Number(lat), Number(long)),
          level: 3,
        };
        const userViewMap = new kakao.maps.Map(container, options);
        // 마커가 표시될 지점
        const markerPosition = new kakao.maps.LatLng(Number(lat), Number(long));

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(userViewMap);
      }
    };
    createMap();
    console.log(query.data);
  }, [mapContainerRef.current, lat]);
  return (
    <>
      <div className="bg-[white] flex w-[100vw] h-[130px] text-center items-center justify-center">
        <div className="text-[40px] text-[#49beb7]">the place you want to move is...</div>
      </div>
      <div className={clsx('bg-[#F2F4F4] w-[100vw] h-[calc(100vh-130px)] flex flex-col !items-center')}>
        <div ref={mapContainerRef} className="w-[100%] h-[100%]"></div>
      </div>
    </>
  );
};

export default SearchedAreaLayout;
