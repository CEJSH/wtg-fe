'use client';

import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/ko_KR';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React from 'react';
import theme from './themeConfig';

dayjs.locale('ko');
dayjs.extend(localeData);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ConfigProvider locale={locale} theme={theme}>
    <StyleProvider>{children}</StyleProvider>
  </ConfigProvider>
);

export default ThemeProvider;
