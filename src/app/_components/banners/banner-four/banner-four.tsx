import Image from "next/image";
import React from "react";
import { BannerFourProps } from "./banner-four.types";
import Link from "next/link";

const BannerFour: React.FC<BannerFourProps> = ({ classname, data }) => {
  return (
    <div className={`${classname} grid gap-2 md:grid-cols-2 lg:grid-cols-4`}>
      {data?.links.map((item, idx) => (
        <>
          <Link href={item?.url} target="_blank" key={idx}>
            <div className="col-span-12 md:col-span-6 w-full h-[100%]">
              <Image
                className="w-full h-full"
                src={item.link_image[0].url}
                width={0}
                height={0}
                style={{ objectFit: "cover" }}
                alt={item.alt}
              />
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default BannerFour;
