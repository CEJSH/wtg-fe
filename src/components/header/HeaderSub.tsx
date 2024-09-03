'use client';
import { usePathname } from 'next/navigation';

export default function HeaderSub() {
  const pathname = usePathname();
  if (pathname.includes('map'))
    return <div className={guideRowStyle}>입력하신 법정동의 2023-2024년 착공 및 착공 예정 지역입니다</div>;
}

const guideRowStyle = 'w-full tracking-wide pr-[36px] break-keep';
