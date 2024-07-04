import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '서울시 주거 지역 선정 보조 서비스',
  description: '공사소음 free한 주거지역을 찾아드립니다.',
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return <section className="w-full flex flex-col">{children}</section>;
}
