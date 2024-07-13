import { InfoBox } from './InfoBox';
import InfoBoxesWrapper from './InfoBoxesWrapper';
const infoTitles = ['소개할게요', '뉴스', '공지사항'];

export function InfoBoxes() {
  return (
    <InfoBoxesWrapper>
      {infoTitles.map(infoTitle => {
        return <InfoBox key={infoTitle} title={infoTitle} />;
      })}
    </InfoBoxesWrapper>
  );
}
