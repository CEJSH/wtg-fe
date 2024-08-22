import { InfoSection } from './InfoSection';
import { MainUpperSection } from './MainUpperSection';

export enum DrawerOpenStateType {
  Desktop,
  DesktopOpened,
  Mobile,
  MobileOpened,
}

export function MainPageLayout() {
  return (
    <div className={mainSectionStyle}>
      <div className={mainUpperSectionWrapperStyle}>
        <MainUpperSection />
      </div>
      <InfoSection />
    </div>
  );
}

const mainUpperSectionWrapperStyle = 'w-full flex flex-col bg-[white]';

const mainSectionStyle = 'flex flex-col w-full bg-white h-full';
