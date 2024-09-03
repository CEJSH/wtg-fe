import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header/Header';

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
        <link rel="preload" href="/city_image.jpg" as="image" />
        {/* <script
          type="text/javascript"
          src="http://dapi.kakao.com/v2/maps/sdk.js?appkey=f0e2999319ef5bbfd3408999f8ea7bef&libraries=services"></script> */}
      </head>
      <body className={bodyStyle}>
        <Header />
        {children}
      </body>
    </html>
  );
}
const bodyStyle = 'flex flex-col w-full bg-white';
