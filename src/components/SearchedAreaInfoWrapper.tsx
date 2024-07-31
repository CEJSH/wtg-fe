'use client';

// 여기도 클라 컴포넌트여야 하네...

export default function SearchedAreaInfoWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-[400px] h-full bg-white text-black">
      <div className="flex py-[16px] items-center justify-center h-[52px] font-[600] text-center text-[13px]">
        이 지역 공사 건수(2023 ~ 2024)
      </div>
      <div className="w-full flex flex-col h-[1px] bg-[#e1e1e1]" />
      <div className="w-full flex flex-col pl-[20px] pt-[8px] bg-[white] overflow-scroll">{children}</div>
    </div>
  );
}
