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
          title: construction.title,
          image: markerImage,
          clickable: true,
        });
        // 마커가 지도 위에 표시되도록 설정한다.
        marker.setMap(map);

        // 마커 커서가 오버되었을 때 마커 위에 표시할 인포윈도우 생성
        var content = `<div class="infowindow">${construction?.title}</div>`;

        //커스텀 오버레이를 생성합니다
        var customOverlay = new window.kakao.maps.CustomOverlay({
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
