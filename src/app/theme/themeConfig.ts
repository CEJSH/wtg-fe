'use client';

import { ThemeConfig } from 'antd';
import { Noto_Sans_KR } from 'next/font/google';
import { COLORS } from './color';

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const fontFamily = ['Pretendard', notoSansKr.style.fontFamily].join(',');

const theme: ThemeConfig = {
  token: {
    colorPrimary: COLORS.primary,
    colorInfo: COLORS.info,
    colorWarning: COLORS.warning,
    colorLink: COLORS.link,
    colorTextBase: COLORS.textBase,
    fontFamily,
  },
  components: {
    Button: {
      textHoverBg: 'transparent',
      primaryShadow: undefined,
      dangerShadow: undefined,
      defaultShadow: undefined,
    },
    InputNumber: {
      controlHeight: 42,
      handleVisible: undefined,
    },
    Input: {
      controlHeightLG: 80,
      borderRadiusLG: 20,
      fontSizeLG: 25,
      fontSize: 16,
    },
    Radio: {
      colorWhite: COLORS.primary,
      colorPrimary: '#F2F4F4',
      colorPrimaryBorder: '#D0D5D7 !important',
      controlOutline: '#D0D5D7',
      colorPrimaryActive: '#F2F4F4',
      colorBorder: '#D0D5D7 !important',
      colorPrimaryHover: 'transparent',
      buttonPaddingInline: 0,
      radioSize: 22,
      dotSize: 14,
      colorBgContainer: '#F2F4F4',
      paddingXS: 0,
    },
    Checkbox: {
      colorWhite: COLORS.primary,
      colorPrimary: '#ffffff',
      colorBorder: COLORS.primary,
      colorPrimaryHover: 'transparent',
    },
    Switch: {
      trackMinWidthSM: 32,
    },
    Select: {
      fontSizeLG: 20,
    },
    Menu: {
      itemHoverBg: COLORS.primary,
    },
    Timeline: {
      itemPaddingBottom: 12,
      tailWidth: 4,
    },
  },
};

export default theme;
