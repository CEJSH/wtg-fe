import { ConfigProvider } from 'antd';

export function InputWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[460px] flex flex-col items-center bg-[#f6f8f5] bg-[url('../../public/city_image.jpg')] bg-cover">
      {/**상단 Upper narrow part */}
      <div className="h-full w-full max-w-[1050px] flex flex-row  justify-center">
        <div className="pt-[156px]">
          <div className="font-[700] h-[46px] text-[40px] tracking-[1px] mx-auto">{`어떤 곳을 찾고 계세요?`}</div>
        </div>
      </div>
      <div className="flex justify-center w-full h-fit">
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
