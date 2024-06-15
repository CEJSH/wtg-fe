import { ConfigProvider } from 'antd';

export function InputWrapper({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
