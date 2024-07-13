import MainPageLayout from './_components/MainPageLayout';
import MainPageLayout2 from './_components/NewMain';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white h-[100vh-80px]">
      {/* <MainPageLayout /> */}
      <MainPageLayout2 />
    </div>
  );
}
