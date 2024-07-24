import Image from 'next/image';
import React from 'react';

import banner from "../../../../../public/images/banner.jpg";
import banner1 from "../../../../../public/images/banner-2.png";
import banner2 from "../../../../../public/images/banner-1.png";
import { BannerFourProps } from './banner-four.types';

const BannerFour: React.FC<BannerFourProps> = ({ classname }) => {
  return (
    <div className={`${classname} grid gap-2 md:grid-cols-2`}>
      <div>
        <div className="col-span-12 md:col-span-6 w-full h-[100%]">
          <Image
            className="w-full h-full"
            src={banner}
            width={0}
            height={0}
            style={{ objectFit: "cover" }}
            alt="banner"
          />
        </div>
      </div>
      <div >
        <div className="col-span-12 md:col-span-6 w-full h-[100%]">
          <Image
            className="w-full h-full"
            src={banner}
            width={0}
            height={0}
            style={{ objectFit: "cover" }}
            alt="banner"
          />
        </div>
      </div>
      <div >
        <div className="col-span-12 md:col-span-6 w-full h-[100%]">
          <Image
            className="w-full h-full"
            src={banner}
            width={0}
            height={0}
            style={{ objectFit: "cover" }}
            alt="banner"
          />
        </div>
      </div>
      <div >
        <div className="col-span-12 md:col-span-6 w-full h-[100%]">
          <Image
            className="w-full h-full"
            src={banner}
            width={0}
            height={0}
            style={{ objectFit: "cover" }}
            alt="banner"
          />
        </div>
      </div>
    </div>
  )
}

export default BannerFour;