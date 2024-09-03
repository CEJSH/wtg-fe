import { useFetchPositions } from '@/hook/useFetchPositions';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface MarkerProps {
  map: any;
  constData: any[];
  setCurrentConst: Dispatch<SetStateAction<any>>;
}

export default function Markers({ map, constData, setCurrentConst }: MarkerProps) {
  const { positions, fetchPositions } = useFetchPositions();
  const loadKakaoMarkers = () => {
    if (map && positions) {
      // 식당 데이터 마커 띄우기
      console.log(positions, 'positions');
      positions?.map(construction => {
        var markerImage = new window.kakao.maps.MarkerImage('/pcrane.png', new window.kakao.maps.Size(24, 38), {
          offset: new window.kakao.maps.Point(27, 69),
        });

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: construction.latlng,
          image: markerImage,
        });
        // 마커가 지도 위에 표시되도록 설정한다.
        marker.setMap(map);

        const placeName = construction.title.slice(7).replaceAll(' ', '');
        const findUrl = `https://map.kakao.com/link/search/${placeName}`;
        const bgColor = construction.cDay.startsWith('2024') ? `rgb(190, 18, 60)` : `rgb(249, 115, 22)`;
        const content =
          '<div class="customoverlay" aria-label="Open construction site details" style="padding-bottom: 1px; padding-left: 3px; padding-right: 3px; opacity: 0.7; line-height: 1.4; color: rgb(255, 255, 255); background-color: ' +
          `${bgColor};` +
          'font-size:10px; margin-right:8px; text-overflow: ellipsis;">' +
          `  <a rel="preconnect" href=${findUrl} target="_blank">` +
          `    <span class="title">${construction.title.slice(7)}</span>` +
          '  </a>' +
          '</div>';

        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
          position: construction.latlng,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });
        // 마커에 마우스오버 이벤트 등록
        window.kakao.maps.event.addListener(marker, 'mouseover', function () {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시
          customOverlay.setMap(map);
        });
        // 마커에 마우스아웃 이벤트를 등록
        window.kakao.maps.event.addListener(marker, 'mouseout', function () {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시
          customOverlay.setMap(null);
        });

        // 선택한 가게 저장
        window.kakao.maps.event.addListener(marker, 'click', function () {
          setCurrentConst(construction);
        });
      });
    }
  };
  if (positions.length > 1) {
    console.log('돼ㅐㅐㅐㅐ따');
    loadKakaoMarkers();
  }
  useEffect(() => {
    if (!!constData && !!map) {
      fetchPositions(constData);
    }
  }, [map, constData]);

  return <></>;
}
