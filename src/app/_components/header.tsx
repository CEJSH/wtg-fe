import Image from "next/image";
import Link from "next/link";
import { Logo } from "../theme/uiConfig";

export function Header () {
    return (
          <div className="h-[80px] bg-[#fafafa] w-full flex flex-row items-center">
            <div className="mr-[16px] h-full flex items-center py-[8px] px-[36px]">
              <Link className="w-full flex items-center h-full" href={'/'}>
                <Image
                  src={Logo}
                  style={{ verticalAlign: 'initial' }}
                  alt="logo"
                  height={34}
                />
              </Link>
            </div>
          </div>
    )
}