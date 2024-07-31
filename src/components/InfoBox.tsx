import { Button } from 'antd';
import Link from 'next/link';

const boxClassName = 'pt-[4px] pb-[11px] border-[1px] border-solid border-y-1 border-x-0 border-t-0 border-[#cccccc]';

export const InfoBox = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <section className="w-full flex flex-col h-full">
      <div className={boxClassName}>
        <div className="text-[16px] font-bold leading-[20px] tracking-wide">{title}</div>
      </div>
      {title === '정확한 법정동을 알고싶어요' && (
        <Link target="_blank" href={'https://www.code.go.kr/stdcode/regCodeL.do'}>
          <Button className="mt-2">법정동 확인하기</Button>
        </Link>
      )}
      <div className="h-full py-2 leading-[135%]">{desc}</div>
    </section>
  );
};
