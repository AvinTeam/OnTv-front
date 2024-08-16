import Image from 'next/image';
import React from 'react';
import { BannerFullProps } from './banner-full.types';
import Link from 'next/link';

const BannerFull: React.FC<BannerFullProps> = ({ classname, data }) => {
    return (
        <div className={`${classname} overflow-auto md:py-2`}>
            <Link href={data?.links?.[0]?.url} target="_blank" className="grid col-span-12 row-span-2 md:grid md:grid-cols-12 gap-2 w-full h-full">
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
            </Link>
        </div>
    )
}

export default BannerFull;