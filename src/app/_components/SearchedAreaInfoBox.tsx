'use client';
import SearchedAreaInfoWrapper from './SearchedAreaInfoWrapper';

const SearchedAreaInfoBox = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <SearchedAreaInfoWrapper>
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
    </SearchedAreaInfoWrapper>
  );
};
export default SearchedAreaInfoBox;
