'use client';

const SearchedAreaInfoBox = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="flex flex-col w-[400px] h-full bg-white ">
      <div className="flex py-[16px] items-center justify-center h-[52px] font-[600] text-center text-[13px]">
        이 지역 공사 건수(2023 ~ 2024)
      </div>
      <div className="w-full flex flex-col h-[1px] bg-[#e1e1e1]" />
      <div className="w-full flex flex-col pl-[20px] pt-[8px] bg-[white] overflow-scroll">
        {data?.data.map((c: any, i: any) => {
          return (
            <div className="flex flex-col py-[16px]">
              <div className="text-[14px] font-[500] text-[#49beb7] mb-[2px]">{c.archGbCdNm || ''}</div>
              <div className="font-[700]">{c.bldNm.length > 1 ? c.bldNm : c.platPlc}</div>
              {c.bldNm.length > 1 && <div className="text-[13px] font-[600] text-[#606060]">{c.platPlc}</div>}
              <div className="flex flex-row gap-[6px] text-[13px]">
                <div className="font-[600] text-[#606060]">착공일</div>
                <div>
                  {c.realStcnsDay.slice(0, 4) + '.' + c.realStcnsDay.slice(4, 6) + '.' + c.realStcnsDay.slice(6) ||
                    c.stcnsSchedDay.slice(0, 4) + '.' + c.stcnsSchedDay.slice(4, 6) + '.' + c.stcnsSchedDay.slice(6)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SearchedAreaInfoBox;
