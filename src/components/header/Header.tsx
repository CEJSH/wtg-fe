import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../../app/theme/uiConfig';
import HeaderSub from './HeaderSub';

export function Header() {
  return (
    <div className={headerStyle}>
      <div className={rowStyle}>
        <Link className={logoWrapperStyle} href={'/'}>
          <Image src={Logo} style={{ verticalAlign: 'initial' }} alt="logo" height={34} />
        </Link>
        <HeaderSub />
      </div>
    </div>
  );
}

const logoWrapperStyle = 'flex items-center';

const rowStyle = 'w-full mr-[16px] h-full flex items-center py-[8px] px-[8px] md:px-[36px] gap-[30px]';

const headerStyle =
  'w-full flex flex-row items-center justify-start text-[20px] md:text-[22px] lg:text-[24px] text-[#49beb7] h-[80px]';
