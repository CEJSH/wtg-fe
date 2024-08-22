'use client';
import { ConfigProvider } from 'antd';
import background from '../../public/city_image.jpg';
import Image from 'next/image';
import { Input } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchProps } from 'antd/es/input';
const client = new QueryClient();

export function MainUpperSection() {
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
  }, [inputPlace, fetchLatLong]);

  useEffect(() => {
    if (latLong.lat && latLong.long && latLong.b_code) {
      router.push(`/map?latitude=${latLong.lat}&longitude=${latLong.long}&b_code=${latLong.b_code}`);
    }
  }, [latLong]);

  return (
    <div className={mainUpperSectionStyle}>
      <Image src={background} alt="bg" fill className={imageStyle} priority sizes="(max-width: 768px) 100vw, 50vw" />
      <div className={titleContainerStyle}>
        <div className="pt-[156px]">
          <div className={titleStyle}>{`어떤 곳을 찾고 계세요?`}</div>
        </div>
      </div>
      <div className={inputSectionStyle}>
        <div className={rowStyle}>
          <div className={subTitleStyle}>법정동을 입력해 주세요</div>
          <div className={inputRowStyle}>
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    fontSize: 16,
                    controlHeight: 60,
                    colorBorder: '#ffffff',
                    colorPrimaryHover: '#ffffff',
                    paddingInline: 28,
                  },
                },
              }}>
              <QueryClientProvider client={client}>
                <Input.Search
                  className={inputStyle}
                  placeholder="원하시는 지역명을 입력해 주세요"
                  onSearch={onSearch}
                  enterButton
                />
              </QueryClientProvider>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

const mainUpperSectionStyle = 'relative h-[460px] flex flex-col items-center bg-[#f6f8f5] bg-cover';

const imageStyle = 'absolute overflow-hidden object-cover object-top';

const titleStyle = 'font-[700] h-[46px] text-[#f6f8f5] md:text-white text-[40px] tracking-[1px] mx-auto';

const titleContainerStyle = 'z-10 px-[16px] h-full w-full max-w-[1050px] flex flex-row  justify-center';

const subTitleStyle =
  'w-full tracking-[1px] flex justify-center rounded-[6px] h-[40px] mb-[26px] bg-[#03142d85] text-white font-[500] items-center';

const inputRowStyle = 'w-full h-fit';

const rowStyle = 'flex flex-col w-[574px] h-[196px]';

const inputSectionStyle = 'z-10 px-[16px] flex justify-center w-full h-fit';

const inputStyle = 'wtg-input !h-[60px] text-[16px] placeholder:!text-[16px]';
