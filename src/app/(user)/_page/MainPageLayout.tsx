'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Header } from '../../_components/header';
import { Input } from 'antd';
import { useRouter } from 'next/navigation';
import { SearchProps } from 'antd/lib/input';
import { InputWrapper } from '@/app/_components/input-wrapper';
import { InfoBox } from '@/app/_components/info-box';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export enum DrawerOpenStateType {
  Desktop,
  DesktopOpened,
  Mobile,
  MobileOpened,
}
const client = new QueryClient();
const MainPageLayout = () => {
  const router = useRouter();
  const [inputPlace, setInputPlace] = useState<string>();
  const [latLong, setLatLong] = useState<{ lat: string; long: string; b_code: string }>({
    lat: '',
    long: '',
    b_code: '',
  });
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
    setInputPlace(value);
  };

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    const setLatLongFn = (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log('법정', result[0]['address']['b_code']);
        if (result[0]['address']['b_code'].length < 1) {
          return alert(`행정동명이 아닌 법정동/구의 명칭을 입력해 주세요`);
        } else {
          setLatLong({ long: result[0]['x'], lat: result[0]['y'], b_code: result[0]['address']['b_code'] });
        }
      }
      if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert(`${inputPlace}의 검색결과가 존재하지 않습니다.`);
      }
      console.log(status);
    };
    if (inputPlace === '') {
      alert(`지역명을 입력해 주세요`);
    }
    if (!!inputPlace) {
      geocoder.addressSearch(inputPlace, setLatLongFn);
    }
  }, [inputPlace]);

  useEffect(() => {
    if (inputPlace === undefined) {
      return;
    } else {
      if (latLong.lat === '') {
        alert(`${inputPlace}은(는) 정확한 검색어가 아닙니다.\n정확한 검색어를 입력해주세요.
        `);
        return;
      }
      router.push(`/map?latitude=${latLong.lat}&longitude=${latLong.long}&b_code=${latLong.b_code}`);
    }
  }, [latLong]);

  return (
    <QueryClientProvider client={client}>
      <div className={clsx('w-full flex flex-col', 'bg-[white]')}>
        <Header />
        <div className="h-[460px] flex flex-col items-center bg-[#f6f8f5] bg-[url('../../public/city_image.jpg')] bg-cover">
          {/**상단 Upper narrow part */}
          <div className="h-full w-full max-w-[1050px] flex flex-row  justify-center">
            <div className="pt-[156px]">
              <div className="font-[700] h-[46px] text-[40px] tracking-[1px] mx-auto">{`어떤 곳을 찾고 계세요?`}</div>
            </div>
          </div>
          {/**상단 Lower search-ui part */}
          <InputWrapper>
            <Input.Search
              className="wtg-input !h-[60px] text-[16px] placeholder:!text-[16px]"
              placeholder="원하시는 지역명을 입력해 주세요"
              onSearch={onSearch}
              enterButton
            />
          </InputWrapper>
        </div>
        {/**하단 */}
        <InfoBox />
      </div>
    </QueryClientProvider>
  );
};

export default MainPageLayout;
