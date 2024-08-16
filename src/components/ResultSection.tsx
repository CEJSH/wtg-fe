'use client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState, useCallback, memo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MapSection from './MapSection';
import ResultInfoBox from './ResultInfoBox';

const ResultSection = memo(() => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const lat = searchParams.get('latitude');
  const long = searchParams.get('longitude');
  const b_code = searchParams.get('b_code');

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const BaseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL || 'http://localhost:8000';
  const { data, error, isLoading } = useQuery({
    queryKey: ['getSearchedRegionData', b_code],
    queryFn: async () => {
      const response = await fetch(`${BaseURL}/construction/get-by-searched-region?b_code=${b_code}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    },
  });

  const [positions, setPositions] = useState<{ title: string; latlng: any; cDay: string }[]>([]);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  const fetchPositions = useCallback(async (data: any) => {
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
    const newPositions = await Promise.all(promises);
    const validPositions = newPositions.filter(position => position !== null);
    setPositions(validPositions as { title: string; latlng: any; cDay: string }[]);
  }, []);

  useEffect(() => {
    if (data && !isLoading && !error) {
      if (data.data.length < 1) {
        alert('해당 주소의 공사데이터가 없습니다');
        router.push('/');
      }
      fetchPositions(data);
    }
  }, [data, isLoading, error, fetchPositions]);

  useEffect(() => {
    if (!mapContainerRef.current || positions.length === 0) return;

    const createMap = () => {
      if (!isMapReady) {
        const container = mapContainerRef.current;
        const options = {
          center: new kakao.maps.LatLng(Number(lat), Number(long)),
          level: 5,
        };
        const userViewMap = new kakao.maps.Map(container, options);
        const markerPosition = new kakao.maps.LatLng(Number(lat), Number(long));
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(userViewMap);
        setIsMapReady(true);
      }
    };
    createMap();
  }, [positions, isMapReady, lat, long]);

  useEffect(() => {
    if (isMapReady && mapContainerRef.current) {
      const container = mapContainerRef.current;
      const options = {
        center: new kakao.maps.LatLng(Number(lat), Number(long)),
        level: 4,
      };
      const userViewMap = new kakao.maps.Map(container, options);

      if (positions.length > 0) {
        const imageSize = new kakao.maps.Size(24, 38);
        const markerImage = new kakao.maps.MarkerImage('/pcrane.png', imageSize, { alt: 'Construction crane icon' });
        positions.forEach(position => {
          const marker = new kakao.maps.Marker({
            position: position.latlng,
            title: position.title,
            image: markerImage,
            clickable: true,
          });

          const placeName = position.title.slice(7).replaceAll(' ', '');
          const findUrl = `https://map.kakao.com/link/search/${placeName}`;
          marker.setMap(userViewMap);
          const bgColor = position.cDay.startsWith('2024') ? `rgb(190, 18, 60)` : `rgb(249, 115, 22)`;

          const content =
            '<div class="customoverlay" aria-label="Open construction site details" style="padding-bottom: 1px; padding-left: 3px; padding-right: 3px; opacity: 0.7; line-height: 1.4; color: rgb(255, 255, 255); background-color: ' +
            `${bgColor};` +
            'font-size:10px; margin-right:8px; text-overflow: ellipsis;">' +
            `  <a href=${findUrl} target="_blank">` +
            `    <span class="title">${position.title.slice(7)}</span>` +
            '  </a>' +
            '</div>';

          const customOverlay = new kakao.maps.CustomOverlay({
            map: userViewMap,
            position: position.latlng,
            content: content,
            yAnchor: 1,
          });

          kakao.maps.event.addListener(marker, 'click', function () {
            if (customOverlay.getMap() !== null) {
              customOverlay.setMap(null);
            } else {
              customOverlay.setMap(userViewMap);
            }
          });
        });
      }
    }
  }, [isMapReady, positions, lat, long]);

  return (
    <MapSection>
      <section ref={mapContainerRef} className="w-full h-[100%]" />
      <ResultInfoBox data={data} />
    </MapSection>
  );
});

export default ResultSection;
