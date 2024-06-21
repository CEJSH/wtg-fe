import LogoImg from '/public/wtg-logo.png';
import ConsImg from '/public/construction.png';
import { StaticImageData } from 'next/image';

interface BackgroundInterface {
  headerColor: `#${string}`;
  mainPageColor: `#${string}`;
  mainTitleColor: `#${string}`;
  footerColor: `#${string}`;
  footerTextColor: `#${string}`;
  searchResultColor: `#${string}`;
}

export const Logo: StaticImageData | string = LogoImg;
export const Marker: StaticImageData | string = ConsImg;

export const Background: BackgroundInterface = {
  headerColor: '#fff', // 헤더 배경
  mainPageColor: '#FFFFFF', // 메인페이지 배경
  mainTitleColor: '#222222', // 메인페이지 타이틀 텍스트
  footerColor: '#282B2E', // 푸터 배경
  footerTextColor: '#fff', // 푸터 글씨 색
  searchResultColor: '#f0f0f0', // 검색결과 컴포넌트 배경
};

export const headerHeight = 'h-[60px]';
export const drawerWidth = 'w-[400px]';
export const BasketPageContentHeight = 'fit-content';
export const MyOrderPageContentHeight = 'lg:h-[calc(100dvh-58px)]';
export const AffidavitPageContentHeight = 'lg:!h-[calc(150dvh)]';
