/** global kakao */
'use client';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchProps } from 'antd/es/input';
import { Input } from 'antd/lib';
import { fetchLatLong } from '@/services/kakao';
import Script from 'next/script';

export function MainUpperSection() {
  const [inputPlace, setInputPlace] = useState<string>('');
  const [isKakaoLoaded, setIsKakaoLoaded] = useState<boolean>(false);
  const router = useRouter();
  const [latLong, setLatLong] = useState<{ lat: string; long: string; b_code: string } | null>(null);

  useEffect(() => {
    if (latLong && latLong.lat && latLong.long && latLong.b_code) {
      router.push(`/map?latitude=${latLong.lat}&longitude=${latLong.long}&b_code=${latLong.b_code}`);
    }
  }, [latLong]);

  const handleFetchLatLong = useCallback(
    async (place: string) => {
      if (!isKakaoLoaded) return;
      try {
        const result = await fetchLatLong(place);
        if (result) {
          setLatLong(result);
        }
      } catch (error) {
        console.error('Failed to fetch lat/long:', error);
      }
    },
    [isKakaoLoaded],
  );

  useEffect(() => {
    if (inputPlace) {
      handleFetchLatLong(inputPlace);
    }
  }, [inputPlace, handleFetchLatLong]);

  const onSearch: SearchProps['onSearch'] = value => {
    if (!value.trim()) {
      alert('지역명을 입력해 주세요');
      return;
    }
    setInputPlace(value);
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&libraries=services&autoload=false`}
        // onReady={loadKakaoMap}
        onReady={() => {
          kakao.maps.load(() => {
            setIsKakaoLoaded(true); // Kakao Maps API가 로드되었음을 설정
          });
        }}
      />
      <Input.Search
        className={inputStyle}
        placeholder="원하시는 지역명을 입력해 주세요"
        onSearch={onSearch}
        enterButton
      />
    </>
  );
}

const inputStyle = 'wtg-input !h-[60px] text-[16px] placeholder:!text-[16px]';
