declare global {
  interface Window {
    kakao: any;
    Geocoder: any;
  }
}

export const getPositionsFromData = async (data: any): Promise<{ title: string; latlng: any; cDay: string }[]> => {
  console.log('getPositionsFromData', 'data :', data);
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
          resolve(null);
        }
      });
    });
  });
  const newPositions = await Promise.all(promises);
  return newPositions.filter(position => position !== null) as { title: string; latlng: any; cDay: string }[];
};

export const fetchLatLong = (place: string): Promise<{ lat: string; long: string; b_code: string } | null> => {
  console.log('fetchLatlong');
  return new Promise((resolve, reject) => {
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
          resolve(null);
        } else {
          resolve({ long: x, lat: y, b_code });
        }
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert(`${place}의 검색결과가 존재하지 않습니다.`);
        resolve(null);
      } else {
        reject(new Error('Failed to fetch location'));
      }
    });
  });
};
