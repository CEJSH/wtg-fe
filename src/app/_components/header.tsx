import Image from "next/image";
import Link from "next/link";
import { Logo } from "../theme/uiConfig";

export function Header () {
    return (
     
          <div className="flex flex-row items-center h-full">
            <div className="mr-[16px] !h-full flex items-center py-[8px] px-[20px]">
              <Link className="w-full flex items-center h-full" href={'/'}>
                <Image
                  src={Logo}
                  style={{ verticalAlign: 'initial' }}
                  objectFit="cover"
                  alt="logo"
                  height={42}
                />
              </Link>
            </div>
          </div>
        
 
    
    )
}