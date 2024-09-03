import background from '../../../public/city_image.jpg';
import Image from 'next/image';

import { InfoSection } from './InfoSection';

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={mainSectionStyle}>
      <div className={mainUpperSectionWrapperStyle}>
        <div className={mainUpperSectionStyle}>
          <Image
            src={background}
            alt="bg"
            fill
            className={imageStyle}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={titleContainerStyle}>
            <div className={titleStyle}>{`어떤 곳을 찾고 계세요?`}</div>
          </div>
          <div className={inputSectionStyle}>
            <div className={rowStyle}>
              <div className={subTitleStyle}>법정동을 입력해 주세요</div>
              <div className={inputRowStyle}>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <InfoSection />
    </div>
  );
};

export default MainPageLayout;
const commonFlexCenterStyle = 'flex justify-center items-center';

const mainUpperSectionWrapperStyle = 'w-full flex flex-col bg-[white]';

const mainSectionStyle = 'flex flex-col w-full bg-white h-full';

const mainUpperSectionStyle = `relative h-[460px] flex-col bg-[#f6f8f5] bg-cover ${commonFlexCenterStyle}`;

const imageStyle = 'bg-white absolute overflow-hidden object-cover object-top';

const titleStyle = 'font-[700] h-[46px] text-[#f6f8f5] md:text-white text-[40px] tracking-[1px] mx-auto';

const titleContainerStyle = 'pt-[156px] z-10 px-[16px] h-full w-full max-w-[1050px] flex flex-row  justify-center';

const subTitleStyle = `w-full tracking-[1px] rounded-[6px] h-[40px] mb-[26px] bg-[#03142d85] text-white font-[500] ${commonFlexCenterStyle}`;

const inputRowStyle = 'w-full h-fit';

const rowStyle = 'flex flex-col w-[574px] h-[196px]';

const inputSectionStyle = `z-10 px-[16px] w-full h-fit ${commonFlexCenterStyle}`;
