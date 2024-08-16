'use client';
import ResultInfoCard from './ResultInfoCard';
import ResultInfoSection from './ResultInfoSection';

const ResultInfoBox = ({ data }: { data: any }) => {
  return (
    <ResultInfoSection>
      {data?.data.map((c: any, i: any) => {
        return <ResultInfoCard data={c} />;
      })}
    </ResultInfoSection>
  );
};
export default ResultInfoBox;
