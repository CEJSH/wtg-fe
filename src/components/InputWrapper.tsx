import { ConfigProvider } from 'antd';
import background from '../../public/city_image.jpg';
import Image from 'next/image';

export function InputWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[460px] flex flex-col items-center bg-[#f6f8f5]  bg-cover">
      <Image
        src={background}
        alt="bg"
        fill
        objectPosition="top"
        priority
        className="absolute overflow-hidden object-cover"
      />
      {/**상단 Upper narrow part */}
      <div className="z-10 px-[16px] h-full w-full max-w-[1050px] flex flex-row  justify-center">
        <div className="pt-[156px]">
          <div className="font-[700] h-[46px] text-[#f6f8f5] md:text-white text-[40px] tracking-[1px] mx-auto">{`어떤 곳을 찾고 계세요?`}</div>
        </div>
      </div>
      <div className="z-10 px-[16px] flex justify-center w-full h-fit">
        <div className="flex flex-col w-[574px] h-[196px]">
          <div className="w-full tracking-[1px] flex justify-center rounded-[6px] h-[40px] mb-[26px] bg-[#03142d85] text-white font-[500] items-center">
            법정동을 입력해 주세요
          </div>
          <div className="w-full h-fit">
            <ConfigProvider
              theme={{
                components: {
                  Input: {
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
  );
}
// bg-[url('../../public/city_image.jpg')]
