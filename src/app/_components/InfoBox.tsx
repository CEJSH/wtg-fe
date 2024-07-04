import InfoBoxesWrapper from './InfoBoxesWrapper';

const boxClassName = 'pt-[4px] pb-[11px] border-[1px] border-solid border-y-1 border-x-0 border-t-0 border-[#cccccc]';
const infoTitles = ['소개할게요', '뉴스', '공지사항'];
const InfoBox = ({ title }: { title: string }) => {
  return (
    <section className="w-full flex flex-col">
      <div className={boxClassName}>
        <div className="text-[16px] font-bold leading-[20px] tracking-wide">{title}</div>
      </div>
      <div>
        <div>
          <div></div>
          <img src="" alt="" />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export function InfoBoxes({ children }: { children?: React.ReactNode }) {
  return (
    <InfoBoxesWrapper>
      {infoTitles.map(infoTitle => {
        return <InfoBox title={infoTitle} />;
      })}
    </InfoBoxesWrapper>
  );
}
