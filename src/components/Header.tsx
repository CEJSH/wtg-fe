'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../app/theme/uiConfig';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  return (
    <div className={headerStyle}>
      <div className={rowStyle}>
        <Link className={logoWrapperStyle} href={'/'}>
          <Image src={Logo} style={{ verticalAlign: 'initial' }} alt="logo" height={34} />
        </Link>
        {pathname.includes('map') && (
          <div className={guideRowStyle}>입력하신 법정동의 2023-2024년 착공 및 착공 예정 지역입니다</div>
        )}
      </div>
    </div>
  );
}

const guideRowStyle = 'w-full tracking-wide pr-[36px] break-keep';

const logoWrapperStyle = 'flex items-center';

const rowStyle = 'w-full mr-[16px] h-full flex items-center py-[8px] px-[8px] md:px-[36px] gap-[30px]';

const headerStyle =
  'w-full flex flex-row items-center justify-start text-[20px] md:text-[22px] lg:text-[24px] text-[#49beb7] h-[80px]';
