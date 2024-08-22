import ResultInfoCard from './ResultInfoCard';
import ResultInfoWrapper from './ResultInfoWrapper';

const ResultInfoSection = ({ data }: { data: any }) => {
  return (
    <ResultInfoWrapper>
      {data?.data.map((c: any, i: any) => {
        return <ResultInfoCard key={`result-${i}`} data={c} />;
      })}
    </ResultInfoWrapper>
  );
};
export default ResultInfoSection;
