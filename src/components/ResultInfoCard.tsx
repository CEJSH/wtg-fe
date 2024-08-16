export default function ResultInfoCard({ data }: { data: any }) {
  const construction = data;
  return (
    <div className={cardWrapperStyle}>
      <div className={archTypeStyle}>{construction.archGbCdNm || ''}</div>
      <div className="font-[700]">{construction.bldNm.length > 1 ? construction.bldNm : construction.platPlc}</div>
      {construction.bldNm.length > 1 && <div className={addressStyle}>{construction.platPlc}</div>}
      <div className={stcnsDayContainerStyle}>
        <div className={stcnsDayLabelStyle}>착공일</div>
        <div>
          {construction.realStcnsDay.slice(0, 4) +
            '.' +
            construction.realStcnsDay.slice(4, 6) +
            '.' +
            construction.realStcnsDay.slice(6) ||
            construction.stcnsSchedDay.slice(0, 4) +
              '.' +
              construction.stcnsSchedDay.slice(4, 6) +
              '.' +
              construction.stcnsSchedDay.slice(6)}
        </div>
      </div>
    </div>
  );
}

const archTypeStyle = 'text-[14px] font-[500] text-[#49beb7] mb-[2px]';

const stcnsDayLabelStyle = 'font-[600] text-[#606060]';

const stcnsDayContainerStyle = 'flex flex-row gap-[6px] text-[13px]';

const addressStyle = 'text-[13px] font-[600] text-[#606060]';

const cardWrapperStyle = 'flex flex-col py-[16px]';
