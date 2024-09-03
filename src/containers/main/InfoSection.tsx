import { InfoCard } from '../../components/card/InfoCard';
import InfoBoxesWrapper from './InfoBoxesWrapper';
const infoTitles = [
  {
    title: '법정동이 뭔가요?',
    desc: '부동산등기법에 따른 부동산등기 등 부동산 관련 문서의 토지 표기로 쓰입니다. \n\n \n\n 행정구역 신설이나 개편을 위한 법률을 만들 때, 해당 법률에서의 관할 구역 표시에도 쓰이는 명칭입니다.',
  },
  {
    title: '정확한 법정동을 알고싶어요',
    desc: '위 페이지에 접속하셔서 검색하시면 정확한 법정동을 파악하실 수 있습니다.',
  },
  { title: '공지사항', desc: '' },
];

export function InfoSection() {
  return (
    <InfoBoxesWrapper>
      {infoTitles.map(({ title, desc }) => {
        return <InfoCard key={`title-${title}`} title={title} desc={desc} />;
      })}
    </InfoBoxesWrapper>
  );
}
