const boxClassName = 'pt-[4px] pb-[11px] border-[1px] border-solid border-y-1 border-x-0 border-t-0 border-[#cccccc]';
const InfoBox = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex flex-col">
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
    </div>
  );
};

export function InfoBoxes({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex pt-[40px] pb-[28px]">
      <div className="flex flex-row gap-[30px] mx-[333px] w-full">
        <InfoBox title={'소개할게요'} />
        <InfoBox title={'뉴스'} />
        <InfoBox title={'공지사항'} />
      </div>
    </div>
  );
}
