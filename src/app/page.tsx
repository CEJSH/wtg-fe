import CommonProvider from "./_common/common";
import MainPageLayout from "./(user)/MainPageLayout";

export default function Home() {
  return (
  <CommonProvider>
    <div className="flex flex-row w-full bg-blue-400 h-[100vh]">
      <MainPageLayout/>
     </div>
  </CommonProvider>
  );
}
