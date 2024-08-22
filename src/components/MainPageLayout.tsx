import background from '../../public/city_image.jpg';
import Image from 'next/image';

import { InfoSection } from './InfoSection';
import { ConfigProvider } from 'antd/lib';

export enum DrawerOpenStateType {
  Desktop,
  DesktopOpened,
  Mobile,
  MobileOpened,
}

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
            <div className="pt-[156px]">
              <div className={titleStyle}>{`어떤 곳을 찾고 계세요?`}</div>
            </div>
          </div>
          <div className={inputSectionStyle}>
            <div className={rowStyle}>
              <div className={subTitleStyle}>법정동을 입력해 주세요</div>
              <div className={inputRowStyle}>
                <ConfigProvider
                  theme={{
                    components: {
                      Input: {
                        fontSize: 16,
                        controlHeight: 60,
                        colorBorder: '#ffffff',
                        colorPrimaryHover: '#ffffff',
                        paddingInline: 28,
                      },
                    },
                  }}>
                  {children}
                </ConfigProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoSection />
    </div>
  );
};

export default MainPageLayout;

const mainUpperSectionWrapperStyle = 'w-full flex flex-col bg-[white]';

const mainSectionStyle = 'flex flex-col w-full bg-white h-full';

const mainUpperSectionStyle = 'relative h-[460px] flex flex-col items-center bg-[#f6f8f5] bg-cover';

const imageStyle = 'absolute overflow-hidden object-cover object-top';

const titleStyle = 'font-[700] h-[46px] text-[#f6f8f5] md:text-white text-[40px] tracking-[1px] mx-auto';

const titleContainerStyle = 'z-10 px-[16px] h-full w-full max-w-[1050px] flex flex-row  justify-center';

const subTitleStyle =
  'w-full tracking-[1px] flex justify-center rounded-[6px] h-[40px] mb-[26px] bg-[#03142d85] text-white font-[500] items-center';

const inputRowStyle = 'w-full h-fit';

const rowStyle = 'flex flex-col w-[574px] h-[196px]';

const inputSectionStyle = 'z-10 px-[16px] flex justify-center w-full h-fit';
