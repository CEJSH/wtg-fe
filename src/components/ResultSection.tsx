'use client';
import { useEffect, useRef, useState, memo, useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MapSection from './MapSection';
import ResultInfoBox from './ResultInfoBox';
import GridSpinner from './ui/GridSpinner';
import { useFetchConstructionData } from '@/hook/useFetchConstructionData';
import { useFetchPositions } from '@/hook/useFetchPositions';

const ResultSection = memo(() => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const lat = searchParams.get('latitude');
  const long = searchParams.get('longitude');
  const b_code = searchParams.get('b_code');
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const BaseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL || 'http://localhost:8000';

  const [isMapReady, setIsMapReady] = useState<boolean>(false);
  const { data, error, isLoading } = useFetchConstructionData(b_code, BaseURL);
  const { positions, fetchPositions } = useFetchPositions();

  const fetchPositionsMemoized = useCallback(() => {
    if (data && !isLoading && !error) {
      if (data.data.length < 1) {
        alert('해당 주소의 공사데이터가 없습니다');
        router.push('/');
      } else {
        fetchPositions(data);
      }
    }
  }, [data, isLoading, error, fetchPositions, router]);

  useEffect(() => {
    fetchPositionsMemoized();
  }, [fetchPositionsMemoized]);

  const initializeMap = useCallback(() => {
    if (!mapContainerRef.current || isMapReady) return;

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
  }, [isMapReady, lat, long]);

  useEffect(() => {
    if (positions.length > 0) {
      initializeMap();
    }
  }, [initializeMap, positions]);

  const markerImage = useMemo(
    () => new kakao.maps.MarkerImage('/pcrane.png', new kakao.maps.Size(24, 38), { alt: 'Construction crane icon' }),
    [],
  );
  const addMarkers = useCallback(
    (userViewMap: any) => {
      positions.forEach(position => {
        const marker = new kakao.maps.Marker({
          position: position.latlng,
          title: position.title,
          image: markerImage,
          clickable: true,
        });
        marker.setMap(userViewMap);
        const placeName = position.title.slice(7).replaceAll(' ', '');
        const findUrl = `https://map.kakao.com/link/search/${placeName}`;
        const bgColor = position.cDay.startsWith('2024') ? `rgb(190, 18, 60)` : `rgb(249, 115, 22)`;

        const content =
          '<div class="customoverlay" aria-label="Open construction site details" style="padding-bottom: 1px; padding-left: 3px; padding-right: 3px; opacity: 0.7; line-height: 1.4; color: rgb(255, 255, 255); background-color: ' +
          `${bgColor};` +
          'font-size:10px; margin-right:8px; text-overflow: ellipsis;">' +
          `  <a rel="preconnect" href=${findUrl} target="_blank">` +
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
    },
    [positions, markerImage],
  );

  useEffect(() => {
    if (isMapReady && mapContainerRef.current) {
      const container = mapContainerRef.current;
      const options = {
        center: new kakao.maps.LatLng(Number(lat), Number(long)),
        level: 4,
      };
      const userViewMap = new kakao.maps.Map(container, options);
      addMarkers(userViewMap);
    }
  }, [isMapReady, addMarkers, lat, long]);

  return (
    <MapSection>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full bg-white">
          <GridSpinner size={10} /> {/* 로딩 중일 때 로딩 인디케이터 표시 */}
        </div>
      ) : (
        <>
          <section ref={mapContainerRef} className="w-full h-[100%]" />
          <ResultInfoBox data={data} />
        </>
      )}
    </MapSection>
  );
});

export default ResultSection;
