import ExtraInfo from './ExtraSection';

export default function MapSection({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <ExtraInfo />
      <div className={mapSectionStyle}>{children}</div>
    </section>
  );
}
const mapSectionStyle = 'bg-[#F2F4F4] w-[100vw] h-[calc(100vh-130px)] flex flex-row !items-center';
