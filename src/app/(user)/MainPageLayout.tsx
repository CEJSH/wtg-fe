'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { Header } from '../_components/header';
import { ConfigProvider, Input, SelectProps } from 'antd';

export enum DrawerOpenStateType {
  Desktop,
  DesktopOpened,
  Mobile,
  MobileOpened,
}

const MainPageLayout = () => {
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const boxClassName = 'pt-[4px] pb-[11px] border-[1px] border-solid border-y-1 border-x-0 border-t-0 border-[#cccccc]';

  return (
    <div className={clsx('w-full flex flex-col', 'bg-[white]')}>
      <Header />
      <div className="h-[460px] flex flex-col items-center bg-[#f6f8f5] bg-[url('../../public/city_image.jpg')] bg-cover">
        {/**상단 Upper narrow part */}
        <div className="h-full w-full max-w-[1050px] flex flex-row  justify-center">
          <div className="pt-[156px]">
            <div className="font-[700] h-[46px] text-[40px] mx-auto">{`어떤 곳으로 이사 가시고 싶으세요?`}</div>
          </div>
        </div>
        {/**상단 Lower search-ui part */}
        <div className="flex justify-center w-full h-fit">
          <div className="flex flex-col w-[574px] h-[196px]">
            <div className="w-full flex justify-center rounded-[6px] h-[40px] mb-[26px] bg-[#03142d85] text-white font-[500] items-center">
              Your Place To Live
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
                <Input.Search
                  className="wtg-input !h-[60px] text-[16px] placeholder:!text-[16px]"
                  placeholder="원하시는 지역명을 입력해 주세요"
                  enterButton
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="flex pt-[40px] pb-[28px]">
        <div className="flex flex-row gap-[30px] mx-[333px] w-full">
          <div className="w-full flex flex-col">
            <div className={boxClassName}>
              <div className="text-[16px] font-bold leading-[20px] tracking-wide">{`소개할게요`}</div>
            </div>
            <div>
              <div>
                <div>c</div>
                <img src="" alt="" />
              </div>
              <div>3</div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className={boxClassName}>
              <div className="text-[16px] font-bold leading-[20px] tracking-wide">{`뉴스`}</div>
            </div>
            <div>
              <div>
                <div>b</div>
                <img src="" alt="" />
              </div>
              <div>2</div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className={boxClassName}>
              <div className="text-[16px] font-bold leading-[20px] tracking-wide">{`공지사항`}</div>
            </div>
            <div>
              <div>
                <div>a</div>
                <img src="" alt="" />
              </div>
              <div>1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageLayout;
