'use client';

import { Button } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import React, {  useState } from 'react';
import { EditFilled } from '@ant-design/icons';
import { COLORS } from '../theme/color';
import { Friend, Love } from '../theme/uiConfig';
import { Header } from '../_components/header';



export enum DrawerOpenStateType {
  Desktop,
  DesktopOpened,
  Mobile,
  MobileOpened,
}

const MainPageLayout = () => {
  return (
    <div
    className={clsx(
      'w-full flex flex-col',
      'bg-[white]',
    )}>
    <div className='header w-full !h-[80px] bg-[#fafafa]'><Header/></div>
    {/** 메인페이지 상단부 */}
    <div className="!h-[600px] flex flex-col items-center bg-[#f6f8f5] bg-[url('../..//public/city_image.jpg')] bg-cover pt-[24px] pb-[26px] ">
      {/**상단 Upper */}
      <div className="h-full w-full max-w-[1050px] flex flex-row gap-[24px] justify-center">
        <div className="flex !min-w-[724px] flex-col items-center justify-between">
          <div
            className={clsx(    
              'py-[8px] px-[28px] rounded-[12px] shadow-md font-[600] text-[#2B2D2F] text-center',
              'bg-[rgb(208,236,223)]',
             '!w-full leading-[135%]',
            )}>
            <div className="w-full flex flex-row justify-around items-center py-[8px]">
              <div className="py-[28px] px-[0px] text-left">
                <div className="home-text-[24]">
                  <div className={'inline-block'}>{'국내·외'}</div> <div className={'inline-block'}> </div>
                  <div className={'inline-block'}>{'문서제출은'}</div> <div className={'inline-block'}></div>
                  <div className={'inline-block'}>{'다국어'}</div> <div className={'inline-block'}> </div>
                  <div className={'inline-block'}>{'문서번역 '}</div>
                  <div className={'inline-block'} style={{ marginLeft: '5px' }}>
                    {'서비스'}
                  </div>
                  <div className={'inline-block'}> </div>
                  <div
                    className={clsx('inline-block !font-[900] !home-text-[40]', '!text-primary')}
                    style={{ marginLeft: '8px', marginRight: '8px' }}>
                    {' 써밋'}
                  </div>
                  <div className={'inline-block'}> </div>
                  <div className={'inline-block'}>{'하세요!'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**오른쪽 */}
        <div className="flex w-fit h-[full]">
          <div className="flex flex-col justify-between gap-[10px]">
            <div className="bg-[transparent] text-primary text-[24px] font-[400] p-[8px] pt-[0px] tracking-tight">
              어디로 가야하조는...
            </div>
            <div className="flex flex-row pl-[4px]">
              <EditFilled style={{ color: COLORS.primary, marginRight: '8px' }} />
              <div className="bg-[white] text-[15px] w-full h-full shadow-sm rounded-[8px] p-[12px] py-[10px]">
                고객에게 공증 대행료를 부과하지 않습니다
              </div>
            </div>
            <div className="flex flex-row pl-[4px]">
              <EditFilled style={{ color: COLORS.primary, marginRight: '8px' }} />
              <div className="bg-[white] text-[15px] w-full h-full shadow-sm rounded-[8px] p-[12px] py-[10px]">
                민원문서 번역에 소요되는 고객부담 최소화를 위해 노력합니다
              </div>
            </div>
            <div className="flex flex-row pl-[4px]">
              <EditFilled style={{ color: COLORS.primary, marginRight: '8px' }} />
              <div className="flex flex-row w-full">
                <div className="flex flex-col w-full flex-auto bg-[white] shadow-sm rounded-[8px] justify-around  p-[12px] py-[10px]">
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex flex-col text-[#2B2D2F] text-[15px] font-[500]">
                      <div>다문화 가정과 사회취약계층을 지원합니다.</div>
                      <div className="tracking-wide">다문화/기초수급/국가유공자</div>
                    </div>
                  </div>
                  {/* <Image /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**상단 Lower wrap */}
      <div className="flex flex-col w-full max-w-[1050px] mt-[16px] justify-center">
        <div className="w-full h-fit flex items-center">
          <div className="flex flex-row flex-auto justify-between gap-[16px] text-center">
            <div className="bg-[white] flex flex-col flex-auto rounded-lg shadow-md h-[80px] text-center ">
              상담 예약
            </div>
            <div className="bg-[white] flex flex-col flex-auto h-[80px] rounded-lg shadow-md items-center">
              빠른 상담
            </div>
          </div>
        </div>
        {/** Button Bar */}
        <div className="h-[40px] mt-[8px] w-full flex justify-around">
          <div className="flex flex-row items-center">
            <Image src={Love} alt={'family'} height={'41'} />
            <Button type="text" className="!text-[15px] !text-[#2B2D2F] !font-[600]">
              가족
            </Button>
          </div>
          <div className="flex flex-row items-center">
            <Image src={Friend} alt={'child'} height={'41'} />
            <Button type="text" className="!text-[15px] !text-[#2B2D2F] !font-[600]">
              친권
            </Button>
          </div>
          <div className="flex flex-row items-center">
            <Image src={Love} alt={'family'} height={'41'} />
            <Button type="text" className="!text-[15px] !text-[#2B2D2F] !font-[600]">
              신원
            </Button>
          </div>
          <div className="flex flex-row items-center">
            <Image src={Friend} alt={'family'} height={'41'} />
            <Button type="text" className="!text-[15px] !text-[#2B2D2F] !font-[600]">
              학력
            </Button>
          </div>
          <div className="flex flex-row items-center">
            <Image src={Love} alt={'family'} height={'41'} />
            <Button type="text" className="!text-[15px] !text-[#2B2D2F] !font-[600]">
              경력
            </Button>
          </div>
          <div className="flex flex-row items-center">
            <Image src={Friend} alt={'family'} height={'41'} />
            <Button type="text" className="!text-[15px] !text-[#2B2D2F] !font-[600]">
              국적
            </Button>
          </div>
          <div className="flex flex-row items-center">
            <Image src={Love} alt={'family'} height={'41'} />
            <Button type="text" className="!text-[15px] !text-[#2B2D2F] !font-[600]">
              회계
            </Button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
    {/**메인페이지 하단부*/}
    <div className="flex justify-center mt-[48px] pt-[px] pb-[36px] px-[6px]">
      {/* <div className={'max-w-[1050px]'}> */}
      <div className={'max-w-[1050px]'}>
        <div className={clsx('sm:mt-[0px]', 'md:mt-[0px]', 'flex flex-col items-center')}>
          {/**검색할때 열리는 카드들 */}
          {/* {searchedProducts.length > 0 && (
            <div
              style={{ backgroundColor: 'white' }}
              className={clsx(
                'sm:!mx-[0px]',
                'md:!mx-[0px] md:p-[24px]',
                'lg:!mx-[40px]',
                'flex flex-auto w-[100%] max-h-[50%] -mt-[24px] mb-[24px] p-[12px] rounded-[16px]',
                'shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,173,130,0.15)]',
              )}>
              <div className="w-full">
                <div className="home-text-[18] md:mb-[22px] sm:mb-[8px] xs:mb-[4px]  font-bold">
                  검색 키워드 관련 상품목록
                </div>
              
              </div>
            </div>
          )} */}
          {/**기본 렌더링 되는 카드들 */}
          <div className="max-w-[1050px] tracking-wide w-full text-[24px] text-[#2B2D2F] font-[700] flex justify-start">
            <p className="!mb-[20px]">어떤 종류의 문서를 찾으시나요?</p>
          </div>
          {/* <DocumentsByCategory onCardClick={onCardClick} isDrawerOpen={open} /> */}
        </div>
        
      </div>
    </div>
  </div>
  );
};

export default MainPageLayout;
