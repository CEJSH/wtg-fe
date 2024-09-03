/** global kakao */
'use client';
import { useState, memo } from 'react';
import { useSearchParams } from 'next/navigation';
import MapSection from './MapSection';
import ResultInfoBox from './ResultInfoBox';
import { useFetchConstructionData } from '@/hook/useFetchConstructionData';
import { useRecoilState } from 'recoil';
import { bCodeState } from '@/states/bCodeState';
import Script from 'next/script';
import Markers from './Markers';

const ResultSection = memo(() => {
  const searchParams = useSearchParams();
  const [address, setAddress] = useRecoilState(bCodeState);
  const lat = searchParams.get('latitude');
  const long = searchParams.get('longitude');
  const b_code = searchParams.get('b_code');
  const BaseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL || 'http://localhost:8000';
  const { data, error, isLoading } = useFetchConstructionData(b_code, BaseURL);
  const [map, setMap] = useState(null);
  const [currentConst, setCurrentConst] = useState(null);

  setAddress(b_code ? b_code : '');

  const loadKakaoMap = () => {
    window.kakao.maps.load(async () => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(Number(lat), Number(long)),
        level: 5,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
    });
  };

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
