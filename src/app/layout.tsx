import type { Metadata } from 'next';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import CommonProvider from './_common/common';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: { default: 'WTG', template: 'wtg | %s' },
  description: 'for the noise free world',
  icons: {
    icon: '/wtg-favicon-color.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f0e2999319ef5bbfd3408999f8ea7bef&libraries=services"></script>
      </head>
      <body className="flex flex-col w-full bg-white">
        <Header />
        <AntdRegistry>
          <CommonProvider>{children}</CommonProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
