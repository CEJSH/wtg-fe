import MainPageLayout from '@/containers/main/MainPageLayout';
import { MainUpperSection } from '@/containers/main/MainUpperSection';
import { ConfigProvider } from 'antd/lib';
import Script from 'next/script';

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            fontSize: 16,
            controlHeight: 60,
            colorBorder: '#ffffff',
            colorPrimaryHover: '#ffffff',
            paddingInline: 28,
          },
        },
      }}>
      <MainPageLayout>
        <MainUpperSection />
      </MainPageLayout>
    </ConfigProvider>
  );
}
