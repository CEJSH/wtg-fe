'use client';

export default function ResultInfoWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={resultInfoSectionStyle}>
      <div className={resultInfoTitleStyle}>이 지역 공사 건수(2023 ~ 2024)</div>
      <div className={lineStyle} />
      <div className={resultInfoContainerStyle}>{children}</div>
    </div>
  );
}

const resultInfoSectionStyle = 'flex flex-col w-[400px] h-full bg-white text-black';

const resultInfoTitleStyle = 'flex py-[16px] items-center justify-center h-[52px] font-[600] text-center text-[13px]';

const lineStyle = 'w-full flex flex-col h-[1px] bg-[#e1e1e1]';

const resultInfoContainerStyle = 'w-full flex flex-col pl-[20px] pt-[8px] bg-[white] overflow-scroll';
