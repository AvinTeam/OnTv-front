import Image from 'next/image';
import React from 'react';
import { BannerFullProps } from './banner-full.types';

const BannerFull: React.FC<BannerFullProps> = ({ classname, data }) => {
    return (
        <div className={`${classname} overflow-auto md:py-2`}>
            <div className="grid col-span-12 row-span-2 md:grid md:grid-cols-12 gap-2 w-full h-full">
                <div className="w-full col-span-12 h-[100%]">
                    <Image
                        className="w-full h-full"
                        src={data?.links?.[0]?.link_image?.[0]?.url}
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

export default BannerFull;