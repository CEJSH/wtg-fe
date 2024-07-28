'use client';
import clsx from 'clsx';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Input } from 'antd';
import { useRouter } from 'next/navigation';
import { SearchProps } from 'antd/lib/input';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InputWrapper } from './InputWrapper';
import { InfoBoxes } from './InfoBoxes';

export enum DrawerOpenStateType {
  Desktop,
  DesktopOpened,
  Mobile,
  MobileOpened,
}

const client = new QueryClient();

const MainPageLayout2 = () => {
  const router = useRouter();
  const [inputPlace, setInputPlace] = useState<string>('');
  const [latLong, setLatLong] = useState<{ lat: string; long: string; b_code: string }>({
    lat: '',
    long: '',
    b_code: '',
  });

  const onSearch: SearchProps['onSearch'] = value => {
    if (!value.trim()) {
      alert('지역명을 입력해 주세요');
      return;
    }
    setInputPlace(value);
  };

  const fetchLatLong = useCallback((place: string) => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(place, (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const {
          x,
          y,
          address: { b_code },
        } = result[0];
        if (b_code.length < 1) {
          alert('행정동명이 아닌 법정동/구의 명칭을 입력해 주세요');
        } else {
          setLatLong({ long: x, lat: y, b_code });
        }
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert(`${place}의 검색결과가 존재하지 않습니다.`);
      }
    });
  }, []);

  useEffect(() => {
    if (inputPlace) {
      fetchLatLong(inputPlace);
    }
  }, [inputPlace]);

  useEffect(() => {
    if (latLong.lat && latLong.long && latLong.b_code) {
      router.push(`/map?latitude=${latLong.lat}&longitude=${latLong.long}&b_code=${latLong.b_code}`);
    }
  }, [latLong]);

  return (
    <QueryClientProvider client={client}>
      <div className={clsx('w-full flex flex-col', 'bg-[white]')}>
        <InputWrapper>
          <Input.Search
            className="wtg-input !h-[60px] text-[16px] placeholder:!text-[16px]"
            placeholder="원하시는 지역명을 입력해 주세요"
            onSearch={onSearch}
            enterButton
          />
        </InputWrapper>
      </div>
      <InfoBoxes />
    </QueryClientProvider>
  );
};

export default MainPageLayout2;
