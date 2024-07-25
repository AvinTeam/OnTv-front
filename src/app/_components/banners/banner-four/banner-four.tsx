import Image from 'next/image';
import React from 'react';

import banner1 from "../../../../../public/images/cover1.png";
import banner2 from "../../../../../public/images/cover2.png";
import banner3 from "../../../../../public/images/cover3.png";
import banner4 from "../../../../../public/images/cover1.png";
import { BannerFourProps } from './banner-four.types';

const BannerFour: React.FC<BannerFourProps> = ({ classname }) => {
  return (
    <div className={`${classname} grid gap-2 md:grid-cols-2 lg:grid-cols-4`}>
      <div>
        <div className="col-span-12 md:col-span-6 w-full h-[100%]">
          <Image
            className="w-full h-full"
            src={banner1}
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
            src={banner2}
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
            src={banner3}
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
            src={banner4}
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