/** global kakao */
'use client';
import { useEffect, useState, memo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MapSection from './MapSection';
import ResultInfoBox from './ResultInfoBox';
import { useFetchConstructionData } from '@/hook/useFetchConstructionData';
import { useFetchPositions } from '@/hook/useFetchPositions';
import { useRecoilState } from 'recoil';
import { bCodeState } from '@/states/bCodeState';
import Script from 'next/script';
import Markers from './Markers';

declare global {
  interface Window {
    kakao: any;
    Geocoder: any;
  }
}

const ResultSection = memo(() => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [address, setAddress] = useRecoilState(bCodeState);
  const lat = searchParams.get('latitude');
  const long = searchParams.get('longitude');
  const b_code = searchParams.get('b_code');
  const BaseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL || 'http://localhost:8000';
  const [isMapReady, setIsMapReady] = useState<boolean>(false);
  const { data, error, isLoading } = useFetchConstructionData(b_code, BaseURL);
  const [map, setMap] = useState(null);

  const [currentConst, setCurrentConst] = useState(null);

  // const fetchPositionsMemoized = useCallback(() => {
  //   console.log('fetchpositionmemoized');
  //   if (data && !isLoading && !error) {
  //     if (data.data.length < 1) {
  //       alert('해당 주소의 공사데이터가 없습니다');
  //       router.push('/');
  //     } else {
  //       fetchPositions(data);
  //     }
  //   }
  // }, [data, isLoading, error, fetchPositions, router]);
  setAddress(b_code ? b_code : '');

  // useEffect(() => {
  //   fetchPositionsMemoized();
  // }, [fetchPositionsMemoized]);

  // const initializeMap = useCallback(() => {
  //   if (!mapContainerRef.current || isMapReady) return;

  //   const container = mapContainerRef.current;
  //   const options = {
  //     center: new kakao.maps.LatLng(Number(lat), Number(long)),
  //     level: 5,
  //   };
  //   const userViewMap = new kakao.maps.Map(container, options);
  //   const markerPosition = new kakao.maps.LatLng(Number(lat), Number(long));
  //   const marker = new kakao.maps.Marker({
  //     position: markerPosition,
  //   });
  //   marker.setMap(userViewMap);
  //   setIsMapReady(true);
  // }, [isMapReady, lat, long]);

  // useEffect(() => {
  //   if (positions.length > 0) {
  //     initializeMap();
  //   }
  // }, [initializeMap, positions]);

  // const markerImage = useMemo(
  //   () =>
  //     new window.kakao.maps.MarkerImage('/pcrane.png', new window.kakao.maps.Size(24, 38), {
  //       alt: 'Construction crane icon',
  //     }),
  //   [],
  // );

  // const addMarkers = useCallback(
  //   (userViewMap: any) => {
  //     positions.forEach(position => {
  //       const marker = new window.kakao.maps.Marker({
  //         position: position.latlng,
  //         title: position.title,
  //         image: markerImage,
  //         clickable: true,
  //       });
  //       marker.setMap(userViewMap);
  //       const placeName = position.title.slice(7).replaceAll(' ', '');
  //       const findUrl = `https://map.kakao.com/link/search/${placeName}`;
  //       const bgColor = position.cDay.startsWith('2024') ? `rgb(190, 18, 60)` : `rgb(249, 115, 22)`;
  //       const content =
  //         '<div class="customoverlay" aria-label="Open construction site details" style="padding-bottom: 1px; padding-left: 3px; padding-right: 3px; opacity: 0.7; line-height: 1.4; color: rgb(255, 255, 255); background-color: ' +
  //         `${bgColor};` +
  //         'font-size:10px; margin-right:8px; text-overflow: ellipsis;">' +
  //         `  <a rel="preconnect" href=${findUrl} target="_blank">` +
  //         `    <span class="title">${position.title.slice(7)}</span>` +
  //         '  </a>' +
  //         '</div>';

  //       const customOverlay = new window.kakao.maps.CustomOverlay({
  //         map: userViewMap,
  //         position: position.latlng,
  //         content: content,
  //         yAnchor: 1,
  //       });

  //       window.kakao.maps.event.addListener(marker, 'click', function () {
  //         if (customOverlay.getMap() !== null) {
  //           customOverlay.setMap(null);
  //         } else {
  //           customOverlay.setMap(userViewMap);
  //         }
  //       });
  //     });
  //   },
  //   [positions, markerImage],
  // );
  // useEffect(() => {
  //   if (positions.length > 0) {
  //     window.kakao.maps.load(() => {
  //       const mapContainer = document.getElementById('map');
  //       const mapOption = {
  //         center: new window.kakao.maps.LatLng(Number(lat), Number(long)),
  //         level: 4,
  //       };
  //       const map = new window.kakao.maps.Map(mapContainer, mapOption);
  //       console.log('add');
  //       addMarkers(map);
  //     });
  //   }
  // }, [positions, lat, long, addMarkers]);
  const loadKakaoMap = () => {
    window.kakao.maps.load(async () => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(Number(lat), Number(long)),
        level: 4,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
      setIsMapReady(true);
      // addMarkers(map);
      // 실당 데이터 마커 띄우기
    });
  };
  // useEffect(() => {
  //   if (isMapReady && mapContainerRef.current) {
  //     const container = mapContainerRef.current;
  //     const options = {
  //       center: new kakao.maps.LatLng(Number(lat), Number(long)),
  //       level: 4,
  //     };
  //     const userViewMap = new kakao.maps.Map(container, options);
  //     addMarkers(userViewMap);
  //   }
  // }, [isMapReady, addMarkers, lat, long]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&libraries=services&autoload=false`}
        onReady={loadKakaoMap}
      />
      <MapSection>
        <section id="map" className="w-full h-[100%]" />
        <ResultInfoBox />
      </MapSection>
      <Markers constData={data} map={map} setCurrentConst={setCurrentConst} />
    </>
  );
});

export default ResultSection;
