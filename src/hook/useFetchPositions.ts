import { useCallback, useState } from 'react';

export const useFetchPositions = () => {
  const [positions, setPositions] = useState<{ title: string; latlng: any; cDay: string }[]>([]);

  const fetchPositions = useCallback(async (data: any) => {
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
    const validPositions = newPositions.filter(position => position !== null);
    setPositions(validPositions as { title: string; latlng: any; cDay: string }[]);
  }, []);

  return { positions, fetchPositions };
};
