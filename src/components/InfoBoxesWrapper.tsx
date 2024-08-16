export default function InfoBoxesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={infoBoxesWrapperStyle}>
      <div className={infoBoxesRowStyle}>{children}</div>
    </div>
  );
}

const infoBoxesRowStyle = 'flex flex-row gap-[30px] md:mx-[22%] mx-[16px] w-full';

const infoBoxesWrapperStyle = 'flex pt-[20px] pb-[28px] z-10 text-black bg-white h-full';
