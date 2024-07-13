'use client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import SearchedAreaInfoBox from '../../_components/SearchedAreaInfoBox';
import SearchedAreaWrapper from '@/app/_components/SearchedAreaWrapper';
import { useSearchParams } from 'next/navigation';

const SearchedArea = () => {
  const searchParams = useSearchParams();
  const lat = searchParams.get('latitude');
  const long = searchParams.get('longitude');
  const b_code = searchParams.get('b_code');

  console.log(lat, long, b_code);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const BaseURL = !!process.env.NEXT_PUBLIC_BASE_SERVER_URL
    ? process.env.NEXT_PUBLIC_BASE_SERVER_URL
    : 'http://localhost:8000';
  const { data, error, isLoading } = useQuery({
    queryKey: ['getSearchedRegionData'],
    queryFn: async () => {
      const response = await fetch(`${BaseURL}/construction/get-by-searched-region?b_code=${b_code}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    },
  });

  const [done, setDone] = useState(false);
  const [positions, setPositions] = useState<{ title: string; latlng: any; cDay: string }[]>([]);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);
  useEffect(() => {
    if (!data || isLoading || error) return;
    const geocoder = new kakao.maps.services.Geocoder();
    const promises = data.data.map((d: any) => {
      return new Promise(resolve => {
        geocoder.addressSearch(d['platPlc'], (result: any, status: any) => {
          if (status === kakao.maps.services.Status.OK && result[0].x) {
            const newPosition = {
              title: result[0].address.address_name,
              latlng: new kakao.maps.LatLng(Number(result[0].y), Number(result[0].x)),
              cDay: d['realStcnsDay'] || d['stcnsSchedDay'],
            };
            resolve(newPosition);
          } else {
            resolve(null);
          }
        });
      });
    });
    Promise.all(promises).then(newPositions => {
      const validPositions = newPositions.filter(position => position !== null);
      setPositions(validPositions);
      setDone(true);
    });
  }, [data, error]);
  // isLoading의존성배열에 넣지 말것

  useEffect(() => {
    if (!mapContainerRef.current || !done) return;
    const createMap = () => {
      if (mapContainerRef.current && !isMapReady) {
        setIsMapReady(true);
        console.log('rendered');
        const container = mapContainerRef.current;
        const options = {
          center: new kakao.maps.LatLng(Number(lat), Number(long)),
          level: 5,
        };
        const markerPosition = new kakao.maps.LatLng(Number(lat), Number(long));
        const userViewMap = new kakao.maps.Map(container, options);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(userViewMap);
      }
    };
    createMap();
  }, [mapContainerRef.current, positions, b_code]);
  // done 도 의존성 배열에서 제거!
  useEffect(() => {
    console.log('position changed', positions);
    if (isMapReady) {
      const container = mapContainerRef.current;
      const options = {
        center: new kakao.maps.LatLng(Number(lat), Number(long)),
        level: 4,
      };
      const userViewMap = new kakao.maps.Map(container, options);
      if (positions.length > 0) {
        console.log(positions.length);
        const imageSize = new kakao.maps.Size(24, 38);

        const markerImage = new kakao.maps.MarkerImage('/pcrane.png', imageSize);
        for (let i = 0; i < positions.length; i++) {
          const marker = new kakao.maps.Marker({
            // map: userViewMap, // 마커를 표시할 지도
            position: positions[i].latlng,
            title: positions[i].title,
            image: markerImage,
            clickable: true,
          });
          const placeName = positions[i].title.slice(7).replaceAll(' ', '');
          const findUrl = `https://map.kakao.com/link/search/${placeName}`;
          marker.setMap(userViewMap);
          const bgColor = positions[i].cDay.startsWith('2024') ? `rgb(190, 18, 60)` : `rgb(249, 115, 22)`;

          const content =
            '<div class="customoverlay" style="padding-bottom: 1px; padding-left: 3px; padding-right: 3px; opacity: 0.7; line-height: 1.4; color: rgb(255, 255, 255); background-color: ' +
            `${bgColor};` +
            'font-size:10px; margin-right:8px; text-overflow: ellipsis;">' +
            `  <a href=${findUrl} target="_blank">` +
            `    <span class="title">${positions[i].title.slice(7)}</span>` +
            '  </a>' +
            '</div>';

          // 커스텀 오버레이를 생성
          const customOverlay = new kakao.maps.CustomOverlay({
            map: userViewMap,
            position: positions[i].latlng,
            content: content,
            yAnchor: 1,
          });
          kakao.maps.event.addListener(marker, 'click', function () {
            console.log('clicked');
            if (customOverlay.getMap() !== null) {
              customOverlay.setMap(userViewMap);
            } else {
              customOverlay.setMap(null);
            }
          });
        }
      }
    }
  }, [isMapReady, lat, long, positions]);
  return (
    <SearchedAreaWrapper>
      <section ref={mapContainerRef} className="w-full h-[100%]" />
      <SearchedAreaInfoBox data={data} />
    </SearchedAreaWrapper>
  );
};

export default SearchedArea;
