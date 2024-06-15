'use client';

import { Logo } from '@/app/theme/uiConfig';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import SearchedAreaInfoBox from './SearchedAreaInfoBox';

const SearchedAreaLayout = ({ lat, long, b_code }: { lat: string; long: string; b_code: string }) => {
  console.log(lat, long, b_code);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const BaseURL = !!process.env.NEXT_PUBLIC_BASE_SERVER_URL
    ? process.env.NEXT_PUBLIC_BASE_SERVER_URL
    : 'http://localhost:8000';
  const { data, error, isLoading } = useQuery({
    queryKey: ['getSearchedRegionData'],
    queryFn: async () => {
      const response = await fetch(`${BaseURL}/map/get-by-searched-region?b_code=${b_code}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // 변환된 JSON 데이터만 반환
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
            resolve(null); // 실패 또는 결과가 없는 경우 null 반환
          }
        });
      });
    });
    Promise.all(promises).then(newPositions => {
      const validPositions = newPositions.filter(position => position !== null);
      setPositions(validPositions);
      setDone(true);
    });
  }, [data, isLoading, error]);

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
  }, [mapContainerRef.current, positions, done, b_code]);

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
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title,
            image: markerImage,
            clickable: true,
          });
          const placeName = positions[i].title.slice(7).replaceAll(' ', '');
          // const weeDo = positions[i].latlng['Ma'];
          // const kyungDo = positions[i].latlng['La'];
          const findUrl = `https://map.kakao.com/link/search/${placeName}`;
          marker.setMap(userViewMap);
          const bgColor = positions[i].cDay.startsWith('2024') ? `rgb(190, 18, 60)` : `rgb(249, 115, 22)`;
          // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          const closeOverlay = () => {
            customOverlay.setMap(null);
          };
          const content =
            '<div class="customoverlay" style="padding-bottom: 1px; padding-left: 3px; padding-right: 3px; opacity: 0.7; line-height: 1.4; color: rgb(255, 255, 255); background-color: ' +
            `${bgColor};` +
            'font-size:10px; margin-right:8px; text-overflow: ellipsis;">' +
            `  <a href=${findUrl} target="_blank">` +
            `    <span class="title">${positions[i].title.slice(7)}</span>` +
            '  </a>' +
            '</div>';

          // 커스텀 오버레이를 생성합니다
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
    <>
      <div className="bg-[white] flex flex-col w-[100vw] h-[130px] text-center items-center">
        <div className="w-full flex flex-row items-center justify-start text-[24px] text-[#49beb7] h-[80px]">
          <div className="mr-[16px] h-full flex items-center py-[8px] px-[36px]">
            <Link className="w-full flex items-center h-full" href={'/'}>
              <Image src={Logo} style={{ verticalAlign: 'initial' }} alt="logo" height={34} />
            </Link>
          </div>
          <div className="tracking-wide">입력하신 법정동의 2023-2024년 착공 및 착공 예정 지역입니다</div>
        </div>
        <div className="w-full h-[1px] bg-[#e1e1e1]"></div>
        <div className="pl-[50px] flex h-[50px] w-full items-center text-[#d6dbdc]">
          <div>Boom Boom Bass 우린 좀 더 lower lower lower</div>
        </div>
        <div className="w-full h-[1px] bg-[#e1e1e1]"></div>
      </div>
      <div className={clsx('bg-[#F2F4F4] w-[100vw] h-[calc(100vh-130px)] flex flex-row !items-center')}>
        <div ref={mapContainerRef} className="w-full h-[100%]"></div>
        <SearchedAreaInfoBox data={data} />
      </div>
    </>
  );
};

export default SearchedAreaLayout;
