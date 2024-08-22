import { useFetchConstructionData } from '@/hook/useFetchConstructionData';
import ResultInfoCard from './ResultInfoCard';
import ResultInfoWrapper from './ResultInfoWrapper';
import { useRecoilValue } from 'recoil';
import { bCodeState } from '@/state/bCodeState';

const ResultInfoSection = () => {
  const BaseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL || 'http://localhost:8000';
  const b_code = useRecoilValue(bCodeState);
  const { data } = useFetchConstructionData(b_code, BaseURL);
  return (
    <ResultInfoWrapper>
      {data?.data.map((c: any, i: any) => {
        return <ResultInfoCard data={c} key={`result-${i}`} />;
      })}
    </ResultInfoWrapper>
  );
};
export default ResultInfoSection;
